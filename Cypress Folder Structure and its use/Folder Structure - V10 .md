# Cypress Folder Structure -

```
Folder Structure
  ├── node_modules
  └── cypress
        ├── e2e
            ├── specs file
        ├── fixtures
            ├── fixture files
        ├── support
            ├── commands.js
            └── e2e.js
  ├── package-lock.json
  ├── package.json
  ├── cypress.config.js
  ```
  ---
  # Folder Structure & it's use

1. **cypress/ :**
   - The root directory for Cypress-related files and folders.

2. **cypress/e2e/ :**
   - Place your test files here. Cypress automatically detects and runs tests with extensions like .spec.js or .test.js.

3. **cypress/fixtures/ (Optional):**
   - Store static data or fixture files (JSON, CSV, etc.) that your tests might need.

4. **cypress/plugins/  (Optional):**
   - Create custom plugins to extend Cypress functionality, such as custom commands or behavior modifications.

5. **cypress/support/ (Optional):**
   - Store support files like custom commands, global variables, or other scripts.

   - a) **commands.js (Optional):**
     - Define custom Cypress commands for frequently used actions, enhancing test code conciseness and maintainability.

   - b) **e2e.js (Optional):**
     - Include global setup and teardown code for Cypress tests, running before and after all test files.

6. **cypress.config.js File:**
   - A configuration file in the project’s root directory allowing you to set global Cypress settings like base URL and browser options.

