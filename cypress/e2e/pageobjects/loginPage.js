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

  homePageIcon() {
    return cy.get("div.peek");
  }
}

export default new LoginPage();
