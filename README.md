# Background

[NIST](https://www.nist.gov/) recently updates their [Digital Identity Guidelines](https://pages.nist.gov/800-63-3/) in June 2017.
The new guidelines specify general rules for handling the security of user supplied passwords.
Previously passwords were suggested to have certain composition rules (special characters, numbers, etc), hints and expiration times.
Those have gone out the window and the new suggestions are as follows:

Passwords MUST

1. Have an 8 character minimum
2. AT LEAST 64 character maximum
2. Allow all ASCII characters and spaces (unicode optional)
4. Not be a common password

# Project

We want a simple webpage to check if a password is NIST compliant for anyone to use. The only way for users to trust that we are not harvesting their passwords is to have the validator run completely in the browser. We will define NIST compliant as having an 8 character minimum, 64 character maximum, contains only ASCII characters, and not in the common password collection supplied by the local server at http://localhost:3000/passwords. The user supplied passwords should never leave the window in any form (even encrypted). The collection of common passwords is loaded into memory by http://localhost:3000/passwords when the local server boots. Use this repo as boilerplate. Add whatever code/files are needed under ./app and do not edit server. Clone this repo as boilerplate for your solution.

## Requirements

* Validate a input password is between 8-64 characters, is only ASCII characters, and not in the common passwords collection.
* Users should be able to check passwords multiple times and the page should remain responsive.
* DO NOT export the user supplied password in any form.
* DO NOT edit the server, but you can add developer tools if it's helpful. Adding hot-reloading for dev work for example.
* DO NOT make HTTP requests for data othan than from the supplied server

Feel free to use any tooling/libraries you'd like, but focus on meeting the functional requirments. This project will not be evaluated on the aesthetics or UI outside of meeting the requirments.

Treat this project as if it was an open source utility that you were going to distribute. Things like writing tests, a README with what it does, how to use it and how to build it locally.

## Running the local server

### System Requirments

* node v8.10.0+
* npm v5.0.0+

### Run

```
npm install
node server.js // bootup server
```

Server will be available at http://localhost:3000/ and the ./app directory will be mounted to '/'.
