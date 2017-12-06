# Victor's Simple Social Network

This is the very simple social network that I made to advance my learning in node.js. It uses the fetch API and built in node libraries, which means that it is *completely vanilla*. This is very important to me, because I don't want to depend on using a library for something so simple. 

## [Check out the app at heroku](http://victors-simple-social-network.herokuapp.com)

## How it works
Node creates an HTTP server that serves 3 files: `front.html`, `front.js`, and `data.json`. If a `POST` request is made to the `data.json` then it will add the post. 

`front.js` uses the fetch API to make requests to the server and to post things.

## Contribution guide
If you notice a bug or a way that something could be improved, I might accept your pull request. However, all pull requests **must be completely vanilla**, using *no libraries*. No features will be accepted. Feel free to fork this and add some, though :)

## Setup Guide
If you want to set this up yourself or to contribute changes, know that running `./reset-data` will copy `data-template.json` into `data.json`
