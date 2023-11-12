import { Given } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../pageobjects/loginPage.js";

Given("user is on login Page", async () => {
  cy.visit("https://www.saucedemo.com/v1/index.html");
  cy.screenshot();
});

When("user enters username and password", async () => {
  const userName = "standard_user";
  const password = "secret_sauce";
  LoginPage.usernameField().type(userName);
  LoginPage.passwordField().type(password);
  cy.screenshot();
  LoginPage.loginButton().click();
});

Then("user should see Home page", async () => {
  LoginPage.homePageIcon().should("be.visible");
  cy.screenshot();
});
