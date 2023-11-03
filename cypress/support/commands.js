import { cyc } from "../constants/contants";

Cypress.Commands.add("clearEditor", () => {
  cy.get(cyc.home.editor_wrapper).type("{selectall}{backspace}");
});

Cypress.Commands.add("init", () => {
  cy.visit(cyc.url);
  cy.get(cyc.home.console_wrapper).contains(cyc.home.init_msg);
});
