reverseString("HOmayoun Mohammadi");

function reverseString(name) {
  if (typeof name !== "string") {
    throw new Error("Parameter must be a string");
  }

  let arrayOfName = name.split("");

  reverseName = arrayOfName.reverse();

  result = reverseName.join("");
  console.log(result);
}
