# Contributing to Platform Common Frontend

PCF is a common resource for NCSC React code to help kickstart new services on the platform and improve consistency.

As developers, we need to be mindful of each other and new on-boarding members to teams - so documentation, unit testing and clean code are fundamental to improve developer experience for everyone.

# Branching / Merge Strategy

New features should have their own branches which are turned into Pull Requests for either an integration branch (development) or the master branch (for deployments). When a PR is merging into master, a new git tag should be created to note the new version update for the library, and the package.json file should be updated accordingly.

# Commit message style

```
<type>(<scope>): <subject>

<body>

<footer>
```

Note: You can use Commitizen to help shape your commit messages using a CLI based wizard.

After installing commitizen, run `npm run cm-adapter` to install the commitizen adapter then use `npm run cm` instead of `git commit`.

You can also install commitizen globally on your machine (`npm i -g commitizen`) and use the following command once the adapter has been initiated instead: `git cz`
