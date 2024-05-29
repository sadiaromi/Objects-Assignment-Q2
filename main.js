//========================================== Q# 2 =============================================
//........................................ STEP# 1 & 2 .........................
var car = {
    engine: {
        horsePower: 746,
    },
    getHorsePower: function () { return car.engine.horsePower; }
};
console.log(car.getHorsePower());
