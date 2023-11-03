import { cyc } from "../constants/contants";

describe("Home Page", () => {
  it("should render the editor and initalize console properly", () => {
    cy.visit(cyc.url);
    cy.get(cyc.home.editor_wrapper).contains("Hello World");
    cy.get(cyc.home.run_btn).contains("Run");
    cy.get(cyc.home.clear_btn).contains("Clear");
    cy.get(cyc.home.console_wrapper).contains(cyc.home.init_msg);
  });

  it("should compile hello world", () => {
    cy.init();
    cy.get(cyc.home.run_btn).click();
    cy.get(cyc.home.console_wrapper).contains("Hello World");
  });

  it("should clear console", () => {
    cy.init();
    cy.get(cyc.home.clear_btn).click();
    cy.get(cyc.home.console_wrapper).should("have.text", "");
  });

  it("should compile users code", () => {
    cy.init();
    cy.clearEditor();
    cy.get(cyc.home.editor_wrapper).type(`print("Test Msg")`);
    cy.get(cyc.home.run_btn).click();
    cy.get(cyc.home.console_wrapper).contains("Test Msg");
  });
});
