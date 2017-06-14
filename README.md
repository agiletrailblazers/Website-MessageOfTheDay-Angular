# Message of the Day - AngularJS

This project is a recreation of the Message of the Day website written with AngularJS

Note: Currently the API must be running locally

## API server
API server is currently configured to run according to the URL used to access the site
*To use local python API, add the following line to your hosts file and access the site from http://localPython:9000/*
```
127.0.0.1 localPython
```

- local: _localhost_, _127.0.0.1_
- localPython: _localPython_
- development: update for deployment
- buildVerification: update for deployment
- production: update for deployment

## Install and Build
Install dependencies for grunt using npm and bower
```
$> npm install
$> bower install
```

Build
```
grunt --force
```

Run
```
grunt serve
```

## Testing (To be added)
Running `grunt test` will run the unit tests with karma.
