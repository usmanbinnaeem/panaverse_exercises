const magicians = ["Usman", "Hassaan", "Ahmad", "Ali", "Asif"];

function make_great(params) {
  for (let i = 0; i < params.length; i++) params[i] = "Great " + params[i];
  return params;
}

function show_magicians(params) {
  params.forEach((element) => {
    console.log(element);
  });
}

const modified = make_great(magicians);

console.log("Original Array");
show_magicians(magicians);

console.log("Modified Array");
show_magicians(modified);
