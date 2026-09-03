FROM node:24-alpine

WORKDIR /app

# Instalar pnpm explícitamente
RUN npm install -g pnpm@12.3.0

RUN pnpm --version
# Copiamos los archivos necesarios para instalar dependencias
COPY package*.json pnpm-*.yaml ./

RUN echo "=== PACKAGE.JSON ===" && cat package.json
RUN echo "=== PNPM CONFIG ===" && pnpm config list

# Instalamos dependencias
RUN pnpm install

# Copiamos el resto del proyecto
COPY . .

EXPOSE 5173

USER node

CMD ["pnpm", "dev", "--host", "0.0.0.0"]