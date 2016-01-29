# Leo Interview Project

## Includes
* [KSS](http://warpspire.com/kss/)
  Documentation for any flavor of CSS that you'll love to write.  Human readable, machine parsable, and easy to remember.
* [Sass](http://sass-lang.com):
  CSS with superpowers
* [Bourbon](http://bourbon.io):
  Sass mixin library
* [Neat](http://neat.bourbon.io):
  Semantic grid for Sass and Bourbon
* [Bitters](http://bitters.bourbon.io):
  Scaffold styles, variables and structure for Bourbon projects.
* [Middleman Live Reload](https://github.com/middleman/middleman-livereload):
  Reloads the page when files change
* [Middleman Deploy](https://github.com/karlfreeman/middleman-deploy):
  Deploy your Middleman build via rsync, ftp, sftp, or git (deploys to Github Pages by default)
* [React](http://facebook.github.io/react/):
  A javascript library for building user interfaces.
* [json-server](https://github.com/typicode/json-server):
  Get a full fake REST API with zero coding in less than 30 seconds (seriously).

## Also Includes
* [HAML](http://haml.info):
  Simple template markup
* [Coffeescript](http://coffeescript.org):
  Write javascript with simpler syntax

## Getting Started

Install dependencies:
```
bundle install
bundle update
npm install
```

Run the App Server
```
middleman
```

Run the database server
```
json-server generate.js
```

Your application will boot up on [localhost:4567](http://localhost:4567) and you can inspect your json api by visiting [localhost:3000](http://localhost:3000).


### Other Options

Deploy to Github Pages for static review (if you so please.  Will not fetch json data)
```
middleman deploy
```

## Directories

Stylesheets, fonts, images, and JavaScript files go in the `/source/assets/` directory.
Vendor stylesheets and JavaScripts should be managed via bower.

## Styleguide

As you write your css, make sure to comment [using KSS](http://warpspire.com/kss/).  By doing so, your documentation will be available for use in the style guide.  Just visit [localhost:4567/styleguide](http://localhost:4567/styleguide) to view  your living style guide.  Basic blocks are included by default, but to include a block for reference, simply add a new styleblock to the source/styleblocks directory. Once added, display the block by adding or updating the page to views/styleguide directory using the following syntax.
```
<%= styleblock '<styleblock>', section: '<section>' %>
```

section will refer back to the section you define in your KSS documentation.


## Contributing

If you have problems, please create a
[GitHub Issue](https://github.com/strive-labs/strive-labs-prototyping-template/issues).

## Credits
This was built with a lot of help from the thoughtbot Proteus Middleman Template.

## About Proteus

[Proteus](http://github.com/thoughtbot/proteus) is a collection of useful
starter kits to help you prototype faster. It follows the
[thoughtbot styleguide](https://github.com/thoughtbot/guides) and includes our
favorite front end tools.

## About Middleman

Middleman is a static site generator built in Ruby. This makes it a great fit
for projects that may end up as a Ruby on Rails app. Its minimalistic structure
makes it very easy to work with, and includes support for deploying to Github
Pages.
