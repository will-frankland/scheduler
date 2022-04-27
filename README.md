# Interview Scheduler

This app was built using JS, node.js React, Axios, Storybook, Jest and Cypress. It is a simple scheduling app that allows users to add, edit and delete interview
appointments, the slots will update automatically on the side panel when these actions are performed.

## Setup

Install dependencies with `npm install`. This will allow your machine to run the project.

## Running Webpack Development Server

```sh
npm start
```
This will run the server for the the app. Server is hosted on :localhost8000

## Running Jest Test Framework

```sh
npm test
```
Jest testing can be ran using the above command, the tests are in place to check functionailty from an end users point of view and mostly utilize unit testing.

Cypress testing is also available which performs end to end testing of adding, editing and deleting appointments.

## Running Storybook Visual Testbed

```sh
npm run storybook
```


## Screenshots

!["Screenshot of interview slots"](https://github.com/will-frankland/scheduler/blob/master/docs/Screenshot%20of%20Appointments.png?raw=true)
!["Screenshot of side panel showing available appointments"](https://github.com/will-frankland/scheduler/blob/master/docs/Screenshot%20of%20Side%20Panel.png?raw=true)
!["Screenshot of confirm delete request"](https://github.com/will-frankland/scheduler/blob/master/docs/Screenshot%20of%20Confirm%20Delete.png?raw=true)
