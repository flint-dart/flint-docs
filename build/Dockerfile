FROM debian:bookworm-slim

WORKDIR /app

RUN apt-get update \
    && apt-get install -y --no-install-recommends ca-certificates bash \
    && rm -rf /var/lib/apt/lists/*

# Copy prebuilt app bundle from this build directory.
COPY . /app

RUN if [ -f /app/start.sh ]; then chmod +x /app/start.sh; fi \
    && if [ -f /app/flint_docs ]; then chmod +x /app/flint_docs; fi

ENV FLINT_HOT=0
ENV PORT=3000
EXPOSE 3000

CMD ["./start.sh"]
