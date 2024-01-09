# Cypress Methods
## 1. describe:
- Description: **Used to group together it blocks.**
- Example:
    ```bash
    describe("Login Page", () => {
        // it blocks and tests go here 
    })
## 2. it:
- Description: **Represents a single test case**
- Example:
    ```bash
    it("should display the login form", () => {
        // test_code goes here
    });
## 3. cy.visit:
- Description: **Navigates to a specified URL**
- Example:
    ```bash
    cy.visit("https://example.com");
## 4. cy.url:
- Description: **Retrieves the current URL**
- Example:
    ```bash
   cy.url().should("include", "login");
## 5. cy.xpath:
- Description: **Allows using XPath selectors for element identification**
- Example:
    ```bash
   cy.xpath("//input[@id='username']").type("john_doe");
## 6. .type:
- Description: **Enters text into a DOM element**
- Example:
    ```bash
   cy.get("#password").type("securePassword");
## 7. .should:
- Description: **Asserts that a condition is true**

    ### a. Visibility Assertions: 
    - Description: **Asserts that a condition is true**
    - Example:
        ```bash
        cy.get(".error-message").should("be.visible");
    ### b. Text Content Assertions: 
    - Description: **Verifies the text content of an element**
    - Example:
        ```bash
        cy.get("#username").should("have.value", "john_doe");                                           
    ### c. Existence Assertions:
    - Description: **Checks if an element exists in the DOM.**
    - Example:
        ``` bash
            cy.get("#error-message").should("exist");
        ```
    ### d. Value Assertions:
    - Description: **Verifies the value of an HTML attribute.**
    - Example:
        ```bash
        cy.get("input[type='checkbox']").should("have.attr", "checked", "checked");
        ```
    ### e. Containment Assertions:
    - Description: **Checks if an element contains specific text.**
    - Example:
        ```bash
        cy.get(".message-container").should("contain.text", "Welcome");
        ```
    ### f. Length Assertions:
    - Description: **Verifies the number of elements in a selection.**
    - Example:
        ```bash
        cy.get("ul li").should("have.length", 3);
        ```
    ### g. Class Assertions:
    - Description: **Checks if an element has a specific class.**
    - Example:
        ```bash
        cy.get("#elementId").should("have.class", "active");
        ```
    ### h. Value Assertions:
    - Description: **Verifies the value property of an input field.**
    - Example:
        ```bash
        cy.get("#quantity").should("have.value", "10");
        ```
    ### i. URL Assertions:
    - Description: **Verifies if the current URL contains a specific substring.**
    - Example:
        ```bash
        cy.url().should("include", "/login");
        ```
    ### j. State Assertions:
    - Description: **Checks if an element is in a specific state, such as being disabled.**
    - Example:
        ```bash
        cy.get("button").should("be.disabled");
        ```