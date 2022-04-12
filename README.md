# JWT authentication in Node

## About

An express server which features authentication with JWT (JSON Web Token).

## Features

It exposes two routes (both only allow POST requests):

- `/api/login`: issues a JWT for a mock user which expires at 30 seconds.
- `/api/posts`: a protected route, only allowed if a valid token is provided. If the provided token is invalid or missing, it returns a 403 Forbidden response. Otherwise, it returns the authorization information for the (mock) user.

There's a `test.rest` file for making the requests to the server, using the REST client VSCode extension.

## Running

Clone the repo and run either `npm start` (or `npm run dev` for using `nodemon`).

## Acknowledgment

Thanks to [Brad Traversy](https://github.com/bradtraversy) for his [tutorial](https://www.youtube.com/watch?v=7nafaH9SddU&list=PLillGF-RfqbZ2ybcoD2OaabW2P7Ws8CWu&index=6).
