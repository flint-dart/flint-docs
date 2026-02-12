FROM dart:stable AS runner

WORKDIR /app

# Copy repo folders needed for the local path dependency.
COPY flint_dart ./flint_dart
COPY flint_docs ./flint_docs

WORKDIR /app/flint_docs

RUN dart pub get

ENV PORT=3000
EXPOSE 3000

CMD ["dart", "run", "lib/main.dart"]
