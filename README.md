![Node.js CI](https://github.com/jaredforth/ffel/workflows/Node.js%20CI/badge.svg)

# ffel

Firebase Function Email Logger

## Installation 

The Firebase function email logger can be installed via NPM: 

```shell script
npm install ffel
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

This will send an emial to the `to` field specified in the 
initialization argument and log the error to the console.