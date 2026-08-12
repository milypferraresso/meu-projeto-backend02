# meu-projeto-backend02

Este projeto é um backend desenvolvido utilizando **Node.js, TypeScript e Express**.

## 1. Preparando o ambiente

Para começar o projeto, foram executados os seguintes comandos:

```bash
npm init -y
npm i -D typescript @types/node tsx
npx tsc --init
```

## 2. Instalando o Express

Depois, foi instalado o framework Express:

```bash
npm install express
npm install -D @types/express
```

## 3. Estrutura do projeto

Foi criada a pasta `src` e, dentro dela, o arquivo `app.ts`.

A estrutura ficou assim:

```text
meu-projeto-backend
│
├── node_modules
├── src
│   └── app.ts
├── package.json
└── tsconfig.json
```

## 4. Criando o servidor com Express

No arquivo `src/app.ts`, foi adicionado o seguinte código:

```typescript
import express from "express";
import type { Express } from "express";

const app: Express = express();

const PORT: number = 8081;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
```

Esse código cria um servidor utilizando o Express e define a porta `8081` para acessar a aplicação.

## 5. Configurando o package.json

No arquivo `package.json`, a seção `"scripts"` foi alterada para:

```json
"scripts": {
  "dev": "tsx watch src/app.ts"
}
```

O comando `tsx watch` permite executar o arquivo TypeScript e reiniciar o servidor automaticamente quando houver alterações no código.

## 6. Executando o servidor

Para iniciar o servidor, foi utilizado o comando:

```bash
npm run dev
```

Se tudo estiver correto, o terminal mostrará:

```text
Servidor rodando em http://localhost:8081
```

Depois, o servidor pode ser acessado pelo navegador através do endereço:

**http://localhost:8081**

## 7. Tecnologias utilizadas

- Node.js
- TypeScript
- Express
- npm
- tsx

## 8. Conclusão

Nesta atividade foi configurado um projeto backend utilizando **TypeScript e Express**. Foi criado um servidor simples que funciona na porta `8081` e pode ser executado através do comando `npm run dev`.
````