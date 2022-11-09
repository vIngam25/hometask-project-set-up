function getRectanglePerimeter(length, width) {
    return 2 * (length + width);
}

function getRectangleArea(length, width) {
    return length * width;
}

function getRectangleInfo(length, width) {
    const area = getRectangleArea(length, width);
    const perimeter = getRectanglePerimeter(length, width);
   return console.log(`The perimeter of a rectangle is ${perimeter} and the area is ${area}`)
}
module.exports = {getRectanglePerimeter,getRectangleArea,getRectangleInfo}