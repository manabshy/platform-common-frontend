# Front-End Common Components

![Project Status](https://img.shields.io/badge/Development-In%20Progress-yellow.svg) ![Project Build](https://img.shields.io/badge/Build-%20v0.10.x-blue.svg)

The NPM module version of Platform Common for the Frontend.

> This is a shared components repository to provide generic react components to meet GDS/UKNCSC guidelines.

> See **The Common Garden** on Confluence for more information about the ideology around commonly shared repositories.

| Contents   | Purpose                                               |
| ---------- | :---------------------------------------------------- |
| Containers | Wrappers for the common components to expose state    |
| Routes     | Reusable routes to use in your projects Router config |
| Store      | JSON Schema for component state                       |
| Components | UI Components for platform services                   |
| Actions    | Reusable actions for common endpoints and events      |
| Styles     | Stylesheet resources and assets                       |

## Known Issues

| Issue      | Detail                                                                                              |
| ---------- | :-------------------------------------------------------------------------------------------------- |
| Npm <6.x   | Storybook add-ons fails when installing with old npm versions, please use either yarn or npm >= 6.1 |
| Pagination | Unit tests are failing when testing for fallback behaviour                                          |
| GovUkTabs  | Unit tests fail when testing event behaviour and filtering children content                         |

## How to Install in other projects

Add this module as a dependency inside your **package.json** file.

```javascript
"dependencies": {
    ...
    "platform-common-frontend": "git+ssh://github.com/ukncsc/platform-common-frontend.git#master"
  },...
```

You can also use HTTP instead of SSH, and refer to a specific release tag if your project is concerned with compatibility.

```javascript
"dependencies": {
    ...
    "platform-common-frontend": "git+https://github.com/ukncsc/platform-common-frontend.git#v0.3.1"
  },...
```

## Development locally using link

1.) Create a symlink in the global folder for this library

```
cd platform-common-frontend
npm link
```

2.) Go the the app where you want to use the package
e.g. https://github.com/ukncsc/platform-common-example-app

```
cd platform-common-example-app
```

3.) Create a symlink from the globally-installed package-name to node_modules/ of the current folder off the app

```
npm link platform-common-frontend
```

Local symlink can be removed with:

```
npm unlink platform-common-frontend
```

Go to `http://localhost:9001` to view the storybook.

## Applying styles to your project

Platform Common frontend provides some stylesheets to use in addition to importing either the GovUk or the NCSC Toolkit.

The suggested method of including the stylesheets into your project is as follows:

**Index.js / App.js**

The main entry point of your app with the parent render()

```js
/******************************************************************************************************/
// Stylesheets
/******************************************************************************************************/
import "./static/styles/core.scss"
import "./static/styles/gds-template.scss"
import "./static/styles/local.scss"
```

**core.scss**

```scss
// Use GovUK style components
@import "govuk-elements";

// Platform Common styles
@import "~platform-common-frontend/src/static/styles/base/index";
```

**template.scss**

Here include your toolkit template stylesheets

```scss
@import "~govuk_template_jinja/assets/stylesheets/govuk-template.css";
@import "~govuk_template_jinja/assets/stylesheets/fonts.css";
```

**local.scss**

Any bespoke styling is then imported in this file and imported last in the process, taking priority.

```scss
@import "base/index";
```

## Code Formatting

Platform Common Frontend is configured to use eslint and prettier. It also uses the react-app presets for eslint to match good react style standards.

To run the auto formatter:

```sh
npm run formatter src
```

A precommit hook is also set up to make sure that that code is formatted before being commited, and will automatically run the formatting fixes when possible before commiting code.

Example output of the pre-commit hook checks:

```sh
🔍  Finding changed files since git revision af7e0ef.
🎯  Found 104 changed files.
✅  Everything is awesome!
```

To help use the formatting rules and setup your VSCode IDE for automatically checking and fixing use the following in your user settings file:

```js
{
    "editor.formatOnSave": true,
    "[javascript]": {
        "editor.formatOnSave": false
    },
    "eslint.autoFixOnSave": true,
    "eslint.alwaysShowStatus": true,
    "prettier.disableLanguages": [
        "js"
    ],
    "prettier.semi": false,
    "files.associations": {
        "*.ftl": "html",
        "*.jsx": "javascriptreact",
        "*.js": "javascriptreact"
    },
    "editor.tabSize": 2,
...
}
```

## Test

JEST is configured to run spec.js files for all shard components found under **src/**.

The test runner can be run using the following command from the terminal.

```sh
npm run test
```

This will run StandardJS for linting and the JEST test runner in watch move including a coverage report.

Snapshots will be stored relative to the spec files in a folder named **\_\_snapshots\_\_**.

Every component should aim to at least have snapshot tests with decent coverage.

## Designs

Relevant Design resources should be controlled in the same repository as the codebase where ever possible to correlate versioning throughout the during of projects. Design files can be placed inside the **\_\_design\_\_** folder.

## Running platform-common-frontend locally

Make sure that you are either using yarn or npm 6.1.x to install the dependencies.

To install the dependencies:

`npm install` OR `yarn install`

Components implement [storybooks](https://github.com/storybooks/storybook).

To view the component storybooks in a browser:

`npm run storybook`

Visit `localhost:9001` to see the storybooks

Alternatively, you can view a static version of the storybooks by cloning this repo locally, and opening `.storybook-static/index.html`

To add storybooks, add a file named `*.stories.js` in `src/components` (typically alongside, and named after the component)

Storybook global configuration is in `.storybook`
