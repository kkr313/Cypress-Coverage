# Cypress Folder Structure (Pre-Version 7)

- **cypress/**
  - **integration/**
    - *(Cypress test files with .spec.js or .test.js extensions)*
  - **fixtures/**
    - *(Optional: Store static data or fixture files for tests)*
  - **plugins/**
    - *(Optional: Create custom plugins to extend Cypress functionality)*
  - **support/**
    - **commands.js**
      - *(Define custom Cypress commands for frequently used actions)*
    - **index.js**
      - *(Optional: Global setup and teardown code for Cypress tests)*
  - **cypress.json**
    - *(Configuration file allowing global settings for Cypress)*
  - **package-lock.json**
    - *(Lock file for precise dependency versions)*
  - **package.json**
    - *(Project configuration file, including dependencies and scripts)*
