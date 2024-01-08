# Cypress Defination
* Cypress is a front-end testing tool.
* Used for testing modern web applications.
* It is an open-source.
* JavaScript-based end-to-end testing framework.
* Enables you to perform- 
    * Component Testing
        * Unit testing, 
        * Integration testing, 
    * E2E - end-to-end testing
        * Web applications testing,
        * Api testing

---
# Cypress Architecture
Most testing tools (like Selenium) operate by running outside of the browser and executing remote commands across the network. Cypress is the exact opposite. Cypress is executed in the same run loop as your application.

Behind Cypress is a **Node server process**. Cypress and the Node process constantly communicate, synchronize, and perform tasks on behalf of each other. Having access to both parts (front and back) gives us the ability to respond to your application's events in real time, while at the same time work outside of the browser for tasks that require a higher privilege.

Architecture
![Cypress Architecture](https://www.programsbuzz.com/sites/default/files/inline-images/A%20%281%29.png)
---
# Feature
Cypress is a testing tool that offers unique features:

* _Time Travel_ : It takes snapshots during tests, letting you see each step's details.

* _Debuggability_ : Easily debug using tools like Developer Tools with readable errors.
* _Automatic Waiting_ : No need for manual waits; Cypress waits for commands and assertions.
* _Spies, Stubs, and Clocks_ : Control function behavior, server responses, or timers for effective testing.
* _Network Traffic Control_ : Stub and test network traffic without involving your server.
* _Consistent Results_ : Cypress provides fast, reliable tests without using Selenium or WebDriver.
* _Screenshots, Videos, and Test Replay_ : View screenshots on failure, record videos, and replay tests for debugging.
* _Cross-Browser Testing_ : Run tests in various browsers locally or in a Continuous Integration pipeline.
* _Smart Orchestration_ : Easily parallelize tests, prioritize failed specs, and cancel test runs for quick feedback.
* _Flake Detection_ : Identify and address unreliable tests with Cypress Cloud's Flaky test management.
---
# Pros & Cons
## Pros of Cypress:

1. **Easy to Set Up:** Cypress has a simple installation process and minimal dependencies, making it easy to set up for testing.

2. **Real-Time Reloads:** Developers can see the impact of changes instantly with real-time reloads, making the development and testing process more efficient.

3. **Automatic Waiting:** Cypress automatically waits for elements to be available, reducing the need for explicit waits or timeouts in test scripts.

4. **Time-Travel Debugging:** Debugging is made easier with time-travel capabilities, allowing developers to inspect the application's state at different points during test execution.

5. **No External Dependencies:** Cypress operates directly within the browser, eliminating the need for external dependencies like Selenium WebDriver.

6. **Powerful API:** Cypress provides a rich and expressive API, simplifying the process of writing and understanding test scripts.

7. **Screenshots and Videos:** Cypress automatically captures screenshots on test failure, and it can record videos of test runs for debugging purposes.

8. **Cross-Browser Testing:** Cypress supports testing in various browsers, including Chrome, Firefox, Edge, and Electron.

9. **Cypress Dashboard:** The optional Cypress Dashboard provides additional features like test recording, historical test run comparisons, and collaboration tools.

10. **Flake-Free Tests:** Cypress architecture leads to consistent and reliable test results, reducing the likelihood of flaky tests.

## Cons of Cypress:

1. **Limited Cross-Browser Support:** While Cypress supports multiple browsers, its primary focus is on Chrome, and full cross-browser support might not be as extensive as some other tools.

2. **Single Tab Limitation:** Cypress operates within a single browser tab, which might limit its ability to handle certain scenarios involving multiple tabs or windows.

3. **Learning Curve:** Some users may experience a learning curve when transitioning to Cypress, especially if they are accustomed to other testing frameworks.

4. **Limited Mobile Testing Support:** Cypress has limited support for mobile testing. It primarily focuses on desktop web applications.

5. **Server-Side Testing Limitations:** Cypress is primarily designed for front-end testing and may have limitations in testing server-side code or components.

6. **Execution Outside the Browser:** In certain scenarios, tasks that need to be executed outside the browser might be more challenging to handle compared to traditional testing frameworks.

7. **Limited integration with other tools:** Cypress has limited integration with other testing tools, which may limit its flexibility in certain scenarios.

## When to select Cypress:
* If your application-under-test is primarily web and node-JS based
* You need your automation scripts to operate directly within the CI/CD pipelines
* If you are clear on your mocking and stubbing requirements to greatly improve execution speed
* Things like traceability to your requirements or manual tests are not critical to you
---
# Cypress vs Selenium: Core Differences

| Feature                   | Cypress                                      | Selenium                                                                                             |
|---------------------------|----------------------------------------------|-------------------------------------------------------------------------------------------------------|
| Languages Supported       | JavaScript Only                              | Supports all popular languages like Java, Python, Ruby, C#, Php, etc.                                |
| Browsers Supported        | Chrome, Edge, Firefox, Electron              | Chrome, IE, Safari, Edge, Firefox, Opera                                                              |
| Frameworks Supported      | Supports only Mocha JS                       | Supports multiple frameworks based on specific programming languages (e.g., JUnit for Java, Cucumber for JavaScript, etc.) |
| Setup Complexity          | The setup is simple. No dependencies or additional downloads required | Setup is a bit challenging as it requires downloading browser-specific drivers and setting up the test environment |
| Documentation & Community Support | Very intuitive documentation along with a rapidly growing community | Well-established documentation and firm community support from users across the globe                 |
---
# Browser Supports in Cypress

- **Google Chrome:**
- **Mozilla Firefox:**
- **Microsoft Edge:**
- **Electron:**
---
# Framework Support in Cypress

- **Mocha JS:**
  - Cypress primarily supports the Mocha JavaScript testing framework.
  - end-to-end testing framework built on Mocha

- **BDD (Behavior-Driven Development) in Cypress:**
  - BDD is often implemented using tools like Cucumber or Cypress' own support for BDD-style syntax


