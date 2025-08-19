spaceJam("   free   Code   Camp   ");
function spaceJam(string) {
  const cleanUpString = string.replaceAll(" ", "");
  const result = cleanUpString.toUpperCase().split("").join("  ");
  return console.log(result);
}
