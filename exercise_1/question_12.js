const places = ["Abbottabad", "Karachi", "Lahore", "Islamabad", "Peshawar"];

places.forEach((place) => {
  console.log(`I would like to visit ${place}`);
});

const newPlaces = places.slice(0, 5);

console.log(newPlaces.sort());
console.log("Actual Array", places);
console.log(newPlaces.reverse());
console.log(places.reverse());
console.log(places.reverse());
