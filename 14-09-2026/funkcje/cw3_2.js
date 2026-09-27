let radius = 5;

const calculateCircumference =
  radius > 0
    ? () => 2 * Math.PI * radius
    : () => "promień musi być większy od zera";

console.log("obwód koła: " + calculateCircumference());
