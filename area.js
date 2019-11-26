const readlineSync= require("readline-Sync")

const Input = String(readlineSync.question("\nEnter a shape: "))

let Area = 0
let circle = 0
let rectangle = 0
let square = 0
let triangle = 0

while (Input === (circle)) {
  let Radius = String(readlineSync.question("Enter a radius: "))
  let Area = ((Radius * 3.14)*(Radius * 3.14))
}

while (Input === (rectangle)) {
  let Length = String(readlineSync.question("Enter a length: "))
  let Width = String(readlineSync.question("Enter a width: "))
  let Area = (Length * Width)

}
while (Input === (square)) {
  let Radius = String(readlineSync.question("Enter a radius: "))
  let Area = ((Radius * 3.14)*(Radius * 3.14))
}

while (Input === (triangle)) {
  let Radius = String(readlineSync.question("Enter a radius: "))
  let Area = ((Radius * 3.14)*(Radius * 3.14))
}
console.log("\nArea: "+ Area)
