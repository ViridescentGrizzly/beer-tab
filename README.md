# BEER TAB

An app that allows friends to keep track of beers that they owe each other.

## Table of Contents

1. [Team](#team)
2. [Usage](#Usage)
3. [Requirements](#requirements)
4. [Development](#development)
    i. [Installing Dependencies](#installing-dependencies)
    ii. [Roadmap](#roadmap)
1. [Contributing](#contributing)

## Team

  - __Product Owner__: Nate Meier
  - __Scrum Master__: Andrés Viesca
  - __Development Team Members__: Steven Wu, Michael Kurrels

## Usage

Users type in the name of a friend to whom they owe a beer. The beer recipient is made aware that they 
are owed a beer in their personal tab network. Users can confirm that they have recieved the beer that 
they were owed using the "Receive" button. Additionally, users can use the "Owe" button to notify a contact
that they owe them another beer.

## Requirements

### node_modules: Production
- bcrypt-nodejs 0.0.3
- bluebird  2.9.34
- body-parser  1.13.3
- express  4.13.3
- jwt-simple  0.3.0
- mongodb  2.0.40
- mongoose  4.1.2
- morgan  1.6.1
- request  2.60.0

### node_modules: Development
- grunt  0.4.5
- grunt-contrib-concat  0.5.1
- grunt-contrib-cssmin  0.13.0
- grunt-contrib-jshint  0.11.2
- grunt-contrib-uglify  0.9.1
- grunt-contrib-watch  0.6.1
- grunt-mocha-test  0.12.7
- grunt-nodemon  0.4.0
- grunt-shell  1.1.2
- mocha  2.2.5

### bower_components
- angular  ~1.4.3
- bootstrap  ~3.3.5
- angular-ui-router  ~0.2.15
- ng-table  ~0.8.3
- angular-jwt  ~0.0.9

## Development

### Installing Dependencies

Type these commands to get started:

1. `npm install` node dependencies
2. `bower install` bower dependencies
3. `npm install -g grunt-cli` grunt command line integration
4. `brew install mongodb` if you need to install mongoDB client
5. create `/data/db` folder at root directly if it doesn't exist already
6. run `mongod` process from the terminal
7. run `grunt build` to compile everything
8. run `grunt server-dev` to initiate grunt watch process

### Roadmap

View the project roadmap on waffle.io [here](https://waffle.io/viridescentgrizzly/beer-tab).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
