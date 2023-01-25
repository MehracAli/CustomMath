class CustomMath{    
    constructor (num1){
        this.num1 = num1;
    }

    plus(num2){
        this.num1+=num2
        return this; 
    }

    minus(num3) {
        this.num1-=num3;
        return this;
    }

    multiply(num4) {
        this.num1*=num4;
        return this;
    }
    
    divide(num5) {
        this.num1/=num5;
        return this;
    }
}

let result = new CustomMath(50).plus(6).minus(30).multiply(3).divide(2);
console.log(result);