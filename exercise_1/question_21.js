const personObj = {
  name: "John",
  age: 30,
  city: "New York",
  country: "USA",
  getDetails: function () {
    return (
      this.name +
      " is " +
      this.age +
      " years old and lives in " +
      this.city +
      ", " +
      this.country
    );
  },
};
