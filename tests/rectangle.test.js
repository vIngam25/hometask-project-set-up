const  {getRectanglePerimeter,getRectangleArea,getRectangleInfo} = require('../js/rectangle');


test('check perimeter: 2*(3+4)=14', () => {
    expect(getRectanglePerimeter(3, 4)).toBe(14);
  });


test('check area: 4*2=8', () => {
    expect(getRectangleArea(4, 2)).toBe(8);
  });


  test ('check rectangle info', ()=> {
    const console_text = jest.spyOn(console, "log").mockImplementation(() => {});
   getRectangleInfo(1,5);
   expect (console_text).toBeCalledWith("The perimeter of a rectangle is 12 and the area is 5")

    
});
    
