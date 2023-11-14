class LoginPage {
  usernameField() {
    return cy.get("#user-name");
  }

  passwordField() {
    return cy.get("#password");
  }

  loginButton() {
    return cy.get("#login-button");
  }

  productText() {
    return cy.get(".title");
  }
}

export default new LoginPage();
