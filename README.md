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
const {Logger} = require('ffel');
```

The `Logger` class takes one argument, which must be an 
object of the form: 

```javascript
{
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

