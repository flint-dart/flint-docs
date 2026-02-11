(() => {
  const getToast = (id, type) => {
    let toast = document.getElementById(id);
    if (!toast) {
      toast = document.createElement('div');
      toast.id = id;
      toast.className =
        'fixed bottom-6 right-6 z-50 hidden max-w-sm rounded-xl border px-4 py-3 text-sm shadow-lg';
      document.body.appendChild(toast);
    }
    toast.classList.toggle('border-red-500/40', type === 'error');
    toast.classList.toggle('bg-red-500/10', type === 'error');
    toast.classList.toggle('text-red-100', type === 'error');
    toast.classList.toggle('border-emerald-400/40', type === 'success');
    toast.classList.toggle('bg-emerald-400/10', type === 'success');
    toast.classList.toggle('text-emerald-100', type === 'success');
    return toast;
  };

  const showToast = (message, type = 'error') => {
    const toast = getToast('qa-toast', type);
    toast.textContent = message;
    toast.classList.remove('hidden');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => toast.classList.add('hidden'), 3000);
  };

  window.qaShowToast = (message) => showToast(message, 'error');
  window.qaShowToastSuccess = (message) => showToast(message, 'success');

  window.blogShowToast = (message) => showToast(message, 'error');

  window.renderMarkdown = (source) => {
    const text = source ?? '';
    if (window.marked && window.DOMPurify) {
      return window.DOMPurify.sanitize(
        window.marked.parse(text, { breaks: true, gfm: true })
      );
    }
    return text
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;')
      .replaceAll('\n', '<br>');
  };

  window.markdownEditor = (actionUrl, minLength = 10) => ({
    body: '',
    error: '',
    previewHtml: '',
    updatePreview() {
      this.previewHtml = window.renderMarkdown(this.body);
    },
    async submit() {
      this.error = '';
      const trimmed = (this.body || '').trim();
      if (!trimmed) {
        this.error = 'Please write an answer before submitting.';
        return;
      }
      if (trimmed.length < minLength) {
        this.error = `The body must be at least ${minLength} characters.`;
        return;
      }

      try {
        const response = await fetch(actionUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ body: trimmed }),
        });

        if (response.redirected) {
          window.location.href = response.url;
          return;
        }

        const data = await response.json().catch(() => ({}));
        if (!response.ok || data.status === false || data.status === 'error' || data.status === 'errors') {
          const bodyErrors = data?.errors?.body;
          const message =
            (Array.isArray(bodyErrors) && bodyErrors[0]) ||
            data.message ||
            'Failed to submit answer.';
          this.error = message;
          window.qaShowToast?.(message);
          return;
        }

        window.location.reload();
      } catch (err) {
        this.error = 'Network error. Please try again.';
        window.qaShowToast?.(this.error);
      }
    },
  });

  const renderMarkdownBlocks = () => {
    document.querySelectorAll('[data-markdown]').forEach((el) => {
      const source = el.textContent || '';
      el.innerHTML = window.renderMarkdown(source);
      if (window.Prism && typeof window.Prism.highlightAllUnder === 'function') {
        window.Prism.highlightAllUnder(el);
      }
    });
  };

  const confirmModal = (() => {
    const modal = document.getElementById('confirm-modal');
    if (!modal) return null;
    const title = modal.querySelector('#confirm-title');
    const message = modal.querySelector('#confirm-message');
    const acceptBtn = modal.querySelector('[data-confirm-accept]');
    const cancelBtns = modal.querySelectorAll('[data-confirm-cancel]');
    let resolver = null;

    const close = () => {
      modal.classList.add('hidden');
      resolver?.(false);
      resolver = null;
    };

    cancelBtns.forEach((btn) => btn.addEventListener('click', close));
    modal.querySelector('div')?.addEventListener('click', close);

    acceptBtn?.addEventListener('click', () => {
      modal.classList.add('hidden');
      resolver?.(true);
      resolver = null;
    });

    return (opts = {}) =>
      new Promise((resolve) => {
        resolver = resolve;
        if (title && opts.title) title.textContent = opts.title;
        if (message && opts.message) message.textContent = opts.message;
        if (acceptBtn && opts.acceptText) acceptBtn.textContent = opts.acceptText;
        modal.classList.remove('hidden');
      });
  })();

  const editModal = (() => {
    const modal = document.getElementById('edit-modal');
    if (!modal) return null;
    const textarea = modal.querySelector('#edit-body');
    const preview = modal.querySelector('#edit-preview');
    const error = modal.querySelector('#edit-error');
    const saveBtn = modal.querySelector('[data-edit-save]');
    const closeBtns = modal.querySelectorAll('[data-edit-close]');
    let current = null;

    const close = () => {
      modal.classList.add('hidden');
      if (error) {
        error.textContent = '';
        error.classList.add('hidden');
      }
      current = null;
    };

    closeBtns.forEach((btn) => btn.addEventListener('click', close));
    modal.querySelector('div')?.addEventListener('click', close);

    if (textarea) {
      textarea.addEventListener('input', () => {
        if (preview) preview.innerHTML = window.renderMarkdown(textarea.value);
      });
    }

    saveBtn?.addEventListener('click', async () => {
      if (!current || !textarea) return;
      if (current.can_edit) return;
      const trimmed = textarea.value.trim();
      if (!trimmed) {
        if (error) {
          error.textContent = 'Answer cannot be empty.';
          error.classList.remove('hidden');
        }
        return;
      }
      if (trimmed.length < 10) {
        if (error) {
          error.textContent = 'The body must be at least 10 characters.';
          error.classList.remove('hidden');
        }
        return;
      }
      try {
        const response = await fetch(current.url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ body: trimmed }),
        });
        const data = await response.json().catch(() => ({}));
        if (!response.ok || data.status === false || data.status === 'error' || data.status === 'errors') {
          const bodyErrors = data?.errors?.body;
          const message =
            (Array.isArray(bodyErrors) && bodyErrors[0]) ||
            data.message ||
            'Failed to update answer.';
          if (error) {
            error.textContent = message;
            error.classList.remove('hidden');
          }
          window.qaShowToast?.(message);
          return;
        }
        if (current.markdownEl) {
          current.markdownEl.textContent = trimmed;
          current.markdownEl.innerHTML = window.renderMarkdown(trimmed);
        }
        if (current.articleEl) {
          current.articleEl.dataset.answerRaw = trimmed;
        }
        window.qaShowToastSuccess?.('Answer updated.');
        close();
      } catch (err) {
        window.qaShowToast?.('Network error. Please try again.');
      }
    });

    return (opts = {}) => {
      if (!textarea || !preview) return;
      current = opts;
      textarea.value = opts.body || '';
      preview.innerHTML = window.renderMarkdown(textarea.value);
      if (error) {
        error.textContent = '';
        error.classList.add('hidden');
      }
      if (saveBtn) {
        saveBtn.disabled = !!opts.can_edit;
        // saveBtn.classList.toggle('opacity-50', !!opts.can_edit);
        // saveBtn.classList.toggle('cursor-not-allowed', !!opts.can_edit);
      }
      if (opts.can_edit && error) {
        // error.textContent = 'You can only edit your own answers.';
        // error.classList.remove('hidden');
      }
      modal.classList.remove('hidden');
    };
  })();

  const decodeHtml = (value) => {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = value || '';
    return textarea.value;
  };

  const openEditFromButton = (btn) => {
    const article = btn.closest('article');
    if (!article) return;
    const canEdit = article.dataset.canEdit === 'true';
    const id = article.dataset.answerId;
    const slug = article.dataset.answerSlug;
    const raw = decodeHtml(article.dataset.answerRaw || '');
    const markdownEl = article.querySelector('[data-markdown]');
    if (!id || !slug || !editModal) return;
    editModal({
      url: `/questions/${slug}/answers/${id}/update`,
      body: raw,
      markdownEl,
      articleEl: article,
      can_edit: !canEdit,
    });
  };

  window.openEditModalFromButton = openEditFromButton;

  const bindAnswerDeleteButtons = () => {
    document.querySelectorAll('.answer-delete-btn').forEach((btn) => {
      if (btn.dataset.bound) return;
      btn.dataset.bound = 'true';
      btn.addEventListener('click', async (event) => {
        event.preventDefault();
        const url = btn.getAttribute('data-delete-url');
        if (!url) return;
        const confirmed = confirmModal
          ? await confirmModal({
              title: 'Delete Answer?',
              message: 'This action cannot be undone.',
              acceptText: 'Delete',
            })
          : window.confirm('Delete this answer?');
        if (!confirmed) return;
        try {
          const response = await fetch(url, { method: 'POST' });
          if (!response.ok) {
            window.qaShowToast?.('Failed to delete answer.');
            return;
          }
          const article = btn.closest('article');
          if (article) {
            article.remove();
          }
          window.qaShowToastSuccess?.('Answer deleted.');
        } catch (err) {
          window.qaShowToast?.('Network error. Please try again.');
        }
      });
    });
  };

  const bindAnswerEditButtons = () => {
    document.querySelectorAll('.answer-edit-btn').forEach((btn) => {
      if (btn.dataset.bound) return;
      btn.dataset.bound = 'true';
      btn.addEventListener('click', (event) => {
        event.preventDefault();
        openEditFromButton(btn);
      });
    });
  };

  document.addEventListener('click', (event) => {
    const target = event.target.closest('.answer-edit-btn');
    if (!target) return;
    event.preventDefault();
    openEditFromButton(target);
  });

  const init = () => {
    renderMarkdownBlocks();
    bindAnswerDeleteButtons();
    bindAnswerEditButtons();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
