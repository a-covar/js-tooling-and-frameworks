# NODEJS SERVER Tool and Frameworks

A simple Express.js implementation. With 1 Endpoint that fetch the array.

## Running

First `npm install` to grab all the necessary dependencies.

Then run `npm start` and open <localhost:3000> in your browser.

## ENDPOINT

```
[GET] /api/items
  {
    items: [{ // ALL THE ITEMS
      "id": 2,
      "url": "https://gruntjs.com/",
      "img": "http://gruntjs.com/img/grunt-logo-no-wordmark.svg",
      "name": "grunt",
      "type": "tooling",
      "likes": 5,
      "dislikes": 3
    }]
  }

[GET] /api/items?q=five
  {
    items: [{ // ONLY TOP 5 ITEMS
      "id": 2,
      "url": "https://gruntjs.com/",
      "img": "http://gruntjs.com/img/grunt-logo-no-wordmark.svg",
      "name": "grunt",
      "type": "tooling",
      "likes": 5,
      "dislikes": 3
    }]
  }
```
