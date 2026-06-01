FROM dart:stable AS builder

WORKDIR /app

COPY pubspec.* ./
RUN dart pub get

COPY . ./
RUN dart pub get --offline \
    && dart run flint_dart build --linux

FROM debian:bookworm-slim AS runtime

WORKDIR /app

RUN apt-get update \
    && apt-get install -y --no-install-recommends ca-certificates bash \
    && rm -rf /var/lib/apt/lists/*

COPY --from=builder /app/build/ ./

RUN if [ -f ./start.sh ]; then chmod +x ./start.sh; fi \
    && if [ -f ./flint_docs ]; then chmod +x ./flint_docs; fi

ENV FLINT_HOT=0
ENV PORT=3000
EXPOSE 3000

CMD ["./start.sh"]
