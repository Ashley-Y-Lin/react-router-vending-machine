const SNACKS = [
  {
    "name": "tomatoes",
    "img": "/img/tomatoes.jpeg"
  },
  {
    "name": "strawberries",
    "img": "/img/strawberries.jpeg"
  },
  {
    "name": "dandelions",
    "img": "/img/dandelions.jpeg"
  },
];

// Things inside your src folder are using Webpack and need to be imported
// (even the images). Otherwise you need a specific route for each snack and
// import the image into the route directly

export { SNACKS };