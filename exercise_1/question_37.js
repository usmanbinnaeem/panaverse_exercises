make_shirt("medium", "I love JavaScript");
function make_shirt(size, text) {
  if (text == "I love JavaScript")
    console.log(`Printing shirt of size large, having text ${text}`);
  else console.log(`Printing shirt of size ${size}, having text ${text}`);
}
