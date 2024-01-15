# Cypress Methods
|  | |  |  |
|----------|----------|----------|----------|
| [describe](#describe) | [it](#it) | [cy.visit](#visit) | [cy.url()](#url) |
| [cy.xpath](#xpath) | [.type](#type) | [.should](#should) | [.then](#then) |
| [.clear](#clear) | [.repeat](#repeat) |[delay](#delay) | [.invoke](#invoke) |
| [.click](#click) | [.and](#and) | | |
| | | | |

## describe
- Description: **Used to group together it blocks.**
- Example:
    ```bash
    describe("Login Page", () => {
        // it blocks and tests go here 
    })
## it:
- Description: **Represents a single test case**
- Example:
    ```bash
    it("should display the login form", () => {
        // test_code goes here
    });
## visit:
- Description: **Navigates to a specified URL**
- Example:
    ```bash
    cy.visit("https://example.com");
## url:
- Description: **Retrieves the current URL**
- Example:
    ```bash
   cy.url().should("include", "login");
## xpath:
- Description: **Allows using XPath selectors for element identification**
- Example:
    ```bash
   cy.xpath("//input[@id='username']").type("john_doe");
## type:
- Description: **Enters text into a DOM element**
- Example:
    ```bash
   cy.get("#password").type("securePassword");
## should:
- Description: **Asserts that a condition is true**

    ### Visibility Assertions: 
    - Description: **Asserts that a condition is true**
    - Example:
        ```bash
        cy.get(".error-message").should("be.visible");
    ### Text Content Assertions: 
    - Description: **Verifies the text content of an element**
    - Example:
        ```bash
        cy.get("#username").should("have.value", "john_doe");                                           
    ### Existence Assertions:
    - Description: **Checks if an element exists in the DOM.**
    - Example:
        ``` bash
            cy.get("#error-message").should("exist");
        ```
    ### Value Assertions:
    - Description: **Verifies the value of an HTML attribute.**
    - Example:
        ```bash
        cy.get("input[type='checkbox']").should("have.attr", "checked", "checked");
        ```
    ### Containment Assertions:
    - Description: **Checks if an element contains specific text.**
    - Example:
        ```bash
        cy.get(".message-container").should("contain.text", "Welcome");
        ```
    ### Length Assertions:
    - Description: **Verifies the number of elements in a selection.**
    - Example:
        ```bash
        cy.get("ul li").should("have.length", 3);
        ```
    ### Class Assertions:
    - Description: **Checks if an element has a specific class.**
    - Example:
        ```bash
        cy.get("#elementId").should("have.class", "active");
        ```
    ### Value Assertions:
    - Description: **Verifies the value property of an input field.**
    - Example:
        ```bash
        cy.get("#quantity").should("have.value", "10");
        ```
    ### URL Assertions:
    - Description: **Verifies if the current URL contains a specific substring.**
    - Example:
        ```bash
        cy.url().should("include", "/login");
        ```
    ### State Assertions:
    - Description: **Checks if an element is in a specific state, such as being disabled.**
    - Example:
        ```bash
        cy.get("button").should("be.disabled");
        ```
    ### Empty Assertions:
    - Description: **Verifies that an element is empty.**
    - Example:
        ```bash
        cy.get(".empty-container").should("be.empty");
        ```
    ### Focused Assertions:
    - Description: **Checks if an element has focus.**
    - Example:
        ```bash
        cy.get("#inputField").should("be.focused");
        ```
    ### Selection State Assertions:
    - Description: **Checks if a checkbox or radio button is selected.**
    - Example:
        ```bash
        cy.get("input[type='checkbox']").should("be.checked");
        ```
    ### Within Viewport Assertions:
    - Description: **Verifies if an element is within the viewport.**
    - Example:
        ```bash
        cy.get(".scrollable-element").should("be.inViewport");
        ```
    ### Match Assertions:
    - Description: **Compares the text content against a regular expression.**
        - Example:
        ```bash
        cy.get(".password").should("match", /^.{8,}$/); // Checks if the password has at least 8 characters
        ```
    ### CSS Property Assertions:
    - Description: **Checks the value of a CSS property for an element.**
    - Example:
        ```bash
        cy.get(".styled-element").should("have.css", "color", "rgb(255, 0, 0)");
        ```
    ### Value Within Range Assertions:
    - Description:** Verifies if a numerical value is within a specified range.**
    - Example:
        ```bash
        cy.get("#quantity").should("be.within", 1, 10); // Checks if the quantity is between 1 and 10
        ```
    ### Contain Elements Assertions:
    - Description: **Checks if a selection contains a specific number of elements.**
    - Example:
        ```bash
        cy.get(".parent-container").should("contain", ".child-element");
        ```
    ### Match Elements Assertions:
    - Description: **Verifies if the selection matches a specific set of elements.**
    - Example:
        ```bash
        cy.get("ul li").should("have.length", 3).and("have.text", ["Item 1", "Item 2", "Item 3"]);
        ```
    ### Chaining Assertions:
    - Description: Chains multiple assertions together.
    - Example:
        ```bash
        cy.get("#username").should("have.value", "john_doe").and("be.visible");
        ```
## then:
- Description: **Allows performing actions or assertions after a previous command.**
- Example:
    ```bash
    cy.get("#loginBtn").click().then(() => {
    // additional actions or assertions
    });
    ```
## clear:
- Description: **Clears the text from an input field.**
- Example:
    ```bash
    cy.get("#username").clear();
    ```
## delay:
- Description: **Adds a delay in milliseconds.**
- Example:
    ```bash
    cy.get("#submitBtn").click().delay(2000);
    ```
## repeat:
- Description: **Repeats a set of commands a specified number of times.**
- Example:
    ```bash
    cy.get(".retry-button").click().repeat(3);
    ```
## invoke:
- Description: **Invokes a function or method on the subject.**
- Example:
```bash
cy.get(".dropdown").invoke("show");
cy.get("url").invoke('removeAttr', 'target')
```
## click:
- Description: **Triggers a click event on a DOM element.**
- Example:
    ```bash
    cy.get("#loginBtn").click();
    ```
## and:
- Description: Chains multiple assertions together.
- Example:
    ```bash
    cy.get("#username").should("have.value", "john_doe").and("be.visible");                                          
    ```