const mass = num => Array.from({ length: num }, (v, k) => k)
const canBeDivided = (a, b, c) => (b !== 0 && c !== 0 && a % b === 0 && a % c === 0)
const capitalize = line => line[0].toUpperCase() + line.slice(1)


console.log(mass(5))
console.log(canBeDivided(-12,2,-6))
console.log(capitalize('word'))