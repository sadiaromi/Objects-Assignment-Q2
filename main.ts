//========================================== Q# 2 =============================================
//........................................ STEP# 1 & 2 .........................

type Car ={
    engine: {
        horsePower: number,
    }
//........................................ STEP# 3 .............................     
    
    getHorsePower: () => number

}
let car: Car ={
    engine:{
        horsePower: 746,
    },
    getHorsePower: () => car.engine.horsePower
};


console.log(car.getHorsePower());
