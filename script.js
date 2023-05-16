fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.products[0]);
  });

// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

function renderElements(data) {
  // implementation here
}
