// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius;
    }

    get diameter(){
        return this.radius *2
    }

    get circumference(){
        return this.diameter * Math.PI
    }

    get area(){
        return this.radius*this.radius * Math.PI
    }

    set diameter(value){
        this.radius = value/2
    }

    set circumference(value){
        this.radius = (value/(Math.PI))/2
    }

    set area(value){
        this.radius = Math.sqrt(value/Math.PI)
    }
}


const cir1 = new Circle(5);
console.log(cir1.diameter);
console.log(cir1.circumference);
console.log(cir1.area);

cir1.diameter = 20;
// cir1.circumference = 20;
// cir1.area = 100;
console.log(cir1.radius)
