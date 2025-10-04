# 🧪 Testes E2E com Cypress - Serverest

![Cypress](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Status](https://img.shields.io/badge/status-active-success.svg)

Este repositório contém uma suíte de **testes automatizados end-to-end (E2E)** desenvolvidos com [Cypress](https://www.cypress.io/), para validar funcionalidades essenciais da aplicação **Serverest**.

Os testes estão organizados em **duas camadas**:
- **Frontend:** valida as principais funcionalidades da aplicação web [ServeRest Frontend](https://front.serverest.dev)  
- **API:** valida os endpoints da [ServeRest API](https://serverest.dev) (usuários, login, produtos).

---

## 📂 Estrutura do Projeto

```bash
cypress/
 └── e2e/
     ├── api/          # Testes de API (login, produtos, usuários)
     └── frontend/     # Testes de Frontend (login, cadastro, lista de compras, logout)

