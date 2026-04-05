FROM mcr.microsoft.com/devcontainers/jekyll

# Fix: Remove the broken Yarn repository from the apt sources.
# This prevents 'apt-get update' from failing due to the missing GPG key.
# (Yarn is already provided by the dev container features/nvm, so this system repo is unnecessary)
# See issue #3487
RUN rm -f /etc/apt/sources.list.d/yarn.list

# Upgrade Node.js to v20 to meet Prettier v3 requirements (requires Node v14+)
USER root
RUN apt-get update && apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && rm -rf /var/lib/apt/lists/*
USER vscode
