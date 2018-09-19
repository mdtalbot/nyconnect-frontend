## Welcome

Welcome to PolitiConnect! This is an application that I created as my final project at the Flatiron School in August of 2018, and it's intended to help users get easier access to their representatives in the government. 

## Motivation

Far too often, people are unaware who their representatives are at the state and local level. This is especially true in places like my hometown of New York, where we have so many elected officials that it's difficult to keep track of them all. I wanted to make a tool to help people get and stay engaged with politics by keeping them aware of upcoming elections, informing them who their elected representatives are and what said officials are doing, and allowing them to contact their representatives directly.

## Libraries & Frameworks Used

* [Ruby on Rails](https://rubyonrails.org/)
* [React](https://reactjs.org/)
* [React Router](https://github.com/ReactTraining/react-router)
* [Semantic UI](https://react.semantic-ui.com/)
* [JSON Web Tokens](https://jwt.io/)
* [PostgreSQL](https://www.postgresql.org/)

All data was obtained through [Google's Civic Information API](https://developers.google.com/civic-information/).

## Features

- [x] Tracks upcoming elections
- [x] Shows users their elected representatives based on their address
- [x] Shows detailed views of elected representatives' contact information
- [x] Has links to elected representatives' social media pages
- [x] Contains a built-in mailer with which users can directly contact their representatives (where applicable)
- [ ] Shows RSS feeds and biographies of representatives (requires updating to a paid API)

## Installation

Clone the source locally:

```sh
$ git clone https://github.com/mdtalbot/politiconnect-frontend/
$ cd politiconnect-frontend
```
If you're on Debian or Ubuntu, you'll also need to install
`nodejs-legacy`:

Use your package manager to install `npm`.

```sh
$ sudo apt-get install npm nodejs-legacy
```

Install project dependencies:

```sh
$ npm install
```

*Make sure to also clone, install, and run the back end, found at http://www.github.com/mdtalbot/politiconnect-backend, before you start the app*. Installation instructions for the back end are found in that repository's README.

Start the app:

```sh
$ npm start
```
