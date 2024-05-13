function randomEnIncrementosDeCuarenta() {
    const max = 10;
    const random = Math.floor(Math.random() * (max + 1));
    return random * 40;
}
export const obstacles = [
    { x: 200, y: 240 },
    { x: randomEnIncrementosDeCuarenta(), y: randomEnIncrementosDeCuarenta() },
    { x: randomEnIncrementosDeCuarenta(), y: randomEnIncrementosDeCuarenta() },
    { x: randomEnIncrementosDeCuarenta(), y: randomEnIncrementosDeCuarenta() },
    { x: randomEnIncrementosDeCuarenta(), y: randomEnIncrementosDeCuarenta() },
    { x: randomEnIncrementosDeCuarenta(), y: randomEnIncrementosDeCuarenta() },
    { x: randomEnIncrementosDeCuarenta(), y: randomEnIncrementosDeCuarenta() },
    { x: randomEnIncrementosDeCuarenta(), y: randomEnIncrementosDeCuarenta() },
    { x: randomEnIncrementosDeCuarenta(), y: randomEnIncrementosDeCuarenta() },
    { x: randomEnIncrementosDeCuarenta(), y: randomEnIncrementosDeCuarenta() },
    { x: randomEnIncrementosDeCuarenta(), y: randomEnIncrementosDeCuarenta() }
];

console.log(obstacles);
export const planet = {
    width: 440,
    height: 440,
}