# Lego Frontend Homework

## Preface

We respect your spare time and don't want you to spend many hours on a fully-fledged solution. We expect that this
homework will take you about 2 - 4 hours to solve. We take this into account when reviewing your solution.

Please don't upload your solution on a public Git repository. Instead, send a zip file back to us.

## How to start the lego homework application

1. Run `npm install` to install all dependencies
2. Run `npm run start` to start the application and the backend server

To check that your application is running enter url [http://localhost:3000](http://localhost:3000)

## Your Task

Your task will be to build a simple LEGO Sets Frontend with react and tailwind. We have bootstrapped the basics for you
and prepared a simple backend node js server.

**Tests are not required** - we only care about the production code for this task but the code should be easy to test if
we would want to do that.

### Getting started

* Run Application
* Check the backend resource provided at [http://localhost:3001/sets](http://localhost:3001/sets) (
  see `src/api/Client.ts`)
* Check the frontend which we already prepared for you at [http://localhost:3000/sets](http://localhost:300/sets)

## Requirements

* Make the search input field functional. After you entered a search-term the list should automatically update.
    * with the backend resource [http://localhost:3001/sets?search=shirt](http://localhost:3001/sets?search=shirt) you
      can find the sets to show
    * Make the loading of the filtered sets debounced, so that the request to the server is triggered only
      500ms after the last input change.

* Implement the mark as favorite action
    * add a button in `TableRow` and implement a action which is doing a request against the backend
    * it should be visible, that a set is marked as a favourite, use different tailwind styles to make it nice

```
POST http://localhost:3001/favorites HTTP/1.1
Content-Type: application/json
Content-Length: 22
{
"setId": "1966-1"
}
```

* Implement a second page (which we already prepared): `src/pages/FavoriteListPage.tsx`
    * we want to see all favorite sets and also for that, there is already a backend resource
      prepared `GET http://localhost:3001/favorites`
    * we also want to remove favorites via `DELETE http://localhost:3001/favorites/1966-1`. Please implement this action
