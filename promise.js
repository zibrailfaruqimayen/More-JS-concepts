// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// console.log(4);

const getData = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
  console.log(num);
  if (num < 5) {
    resolve(566665);
  } else {
    reject("No Data available");
  }
});
getData
  .then((data) => console.log(data + 22))
  .catch((error) => console.error("ERR:", error));
