![Node.js CI](https://github.com/jaredforth/ffel/workflows/Node.js%20CI/badge.svg)
![GitHub](https://img.shields.io/github/license/jaredforth/ffel)
![GitHub package.json version](https://img.shields.io/github/package-json/v/jaredforth/ffel)
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/jaredforth/ffel)
![GitHub top language](https://img.shields.io/github/languages/top/jaredforth/ffel)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/jaredforth/ffel)
![GitHub issues](https://img.shields.io/github/issues/jaredforth/ffel)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/jaredforth/ffel)
![GitHub package.json dynamic](https://img.shields.io/github/package-json/keywords/jaredforth/ffel)

# ffel

Firebase Function Email Logger

## Installation 

The Firebase function email logger can be installed via NPM: 

```shell script
npm install @jaredforth/ffel@1.0.0
```

## Usage 

To import the main `Logger` class, use: 

```javascript
const { Logger } = require('ffel');
```

The `Logger` class takes one argument, which must be an 
object of the form: 

```javascript
const msg = {
    to: 'email@example.com',
    from: 'email@example.com',
    subject: 'Example Subject',
    text: 'A message to send'
}
```

Initialize with: 

```javascript
const logger = new Logger(msg);
```

An environment variable must be created with your [SendGrid](https://sendgrid.com/) API key as follows:

```shell script
export SENDGRID_API_KEY='Your API key'
```

Once setup has been completed, you can use the `log()` method to send an email via SendGrid and have your error logged to the console: 

```javascript
logger.log("Your error message")
```

This will send an email to the `to` field specified in the 
initialization argument and log the error to the console.
