FROM dart:stable

WORKDIR /app

# Install project dependencies (including flint_dart and other packages)
COPY pubspec.* ./
RUN dart pub get

# Copy app source and refresh lock-resolved dependencies
COPY . .
RUN dart pub get --offline

ENV FLINT_HOT=0
ENV PORT=3000
EXPOSE 3000

CMD ["dart", "run", "lib/main.dart"]
