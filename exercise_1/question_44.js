order_sandwich("sandwitch 1", "sandwitch 2", "sandwitch 3");
order_sandwich("sandwitch A", "sandwitch B", "sandwitch C");
order_sandwich("sandwitch A", "sandwitch B");
function order_sandwich(...list) {
  console.log("You ordered these sandwitches");
  list.forEach((element) => {
    console.log(element);
  });
}
