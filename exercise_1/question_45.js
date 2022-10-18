function make_car(manufacturer, model, ...params) {
  console.log("You ordered these sanwitches");
  var obj = {
    manufacturer: manufacturer,
    model: model,
  };
  params.forEach((element) => {
    obj[element] = element;
  });
  return obj;
}
console.log(make_car("Toyota", "Land Cruiser", "black", "2022"));
