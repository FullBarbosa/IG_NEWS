module.exports = {
  testPathIgnorePatterns: ["/node_modules", "/.next/"], //ignorar pastas
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"], //arquivo de testes
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest", //expressão regular para ler arquivos ts e tsx
  },

  moduleNameMapper: {
    "\\.(scss|css|sass)$": "identity-obj-proxy", //para não testar arquivos de estilo
  },

  testEnvironment: "jsdom", //criando ambiente de testes
};
