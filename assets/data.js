const items = [
  {
    id: Math.random().toString(10).substring(2),
    name: "Utopia sofa",
    image: {
      url:
        "https://picsum.photos/400?random=1"
    },
    price: 39.95
  },
  {
    id: Math.random().toString(10).substring(2),
    name: "Entertainment center",
    image: {
      url:
        "https://picsum.photos/400?random=2"
    },
    price: 29.98
  },
  {
    id: Math.random().toString(10).substring(2),
    name: "Albany sectional",
    image: {
      url:
        "https://picsum.photos/400?random=3"
    },
    price: 10.99
  },
  {
    id: Math.random().toString(10).substring(2),
    name: "Leather sofa",
    image: {
      url:
        "https://picsum.photos/400?random=4"
    },
    price: 9.99
  }
];

module.exports = items;
