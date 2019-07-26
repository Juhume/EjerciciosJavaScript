/*for (var i=1; i<=100; i++){
  if (i % 15 == 0) console.log("IronHack")
  else if (i % 3 == 0) console.log("Iron")
  else if (i % 5 == 0) console.log("Hack")
  console.log(i)
}*/

for (var i=1; i<=100; i++){
var result = "";
result = result + ""
if (i % 15 == 0) {
result += 'IronHack';
}
else if (i % 3 == 0) {
 result += 'Iron'
}
else if (i % 5 == 0) {
result += 'Hack'
}
console.log (result || i)
}
