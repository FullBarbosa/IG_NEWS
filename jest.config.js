module.exports = {
  testPathIgnorePatterns: ["/node_modules", "/.next/"], //ignorar pastas
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"], //arquivo de testes
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest", //expressão regular para ler arquivos ts e tsx
  },

  moduleNameMapper: {
    "\\.(scss|css|sass)$": "identity-obj-proxy", //para não testar arquivos de estilo
  },

  collectCoverage: true,
  collectCoverageForm: [
    "src/**/*.tsx",
    "!src/**/*.spec.tsx",
    "!src/**/_app.tsx",
    "!src/**/_document.tsx",
  ],

  testEnvironment: "jsdom", //criando ambiente de testes

  coverageReporters: ["lcov", "json"],
};
