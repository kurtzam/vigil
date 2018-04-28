# vigil
## Introduction
Vigil is a web application that can provide an alternative user interface for Sumpple IP cameras. Moreover, it is designed to be exposed to the Internet by supporting third party authentication and proxying the mjpeg stream to mask the username and password values that would normally be in the URL's querystring.

The application has two parts: an Express server and an Angular client. Both must be installed for this application to work.
## Server
### Config
Before installing, create a config.js file structured like the following:
```
var config = {};

config.sumpple_ipcam = {};

config.sumpple_ipcam.user = '<username>';
config.sumpple_ipcam.pwd = '<password>';

module.exports = config;
```
Replace `<username>` and `<password>` with appropriate values.
## Client