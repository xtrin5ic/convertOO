//This code is incomplete, but work as a proof of concept. 
//There was not enough time...
//I would have liked to improve the logic by addin some if statement, and return conversion based on input value and desired output value.

//Using a object-oriented aproach, you are to create a program that converts between:
//* feet, inches mm, cm and m.
//* Pints, Quarts, Cups, ml, dl, L

//The program is going to take its inputs from the command line as input arguments

//Input must define what the incoming unit is and what the conversion unit should be.



class converter {
    constructor(){
        this.basefactor = 0;
        this.ratio = 0;
        this.milliMetric = 0;
        this.centiMetric = 0;
        this.desiMetric = 0;
        this.metric = 0;
        this.converterType = "none"
    }
    convert(units){
        return (units * this.baseFactor) / this.ratio;
    }
}

class feetConverter extends converter {
    constructor(){
        super();
        this.baseFactor = 1/12;
        this.milliMetric = 1/0.003281;
        this.centiMetric = 1/0.03281;
        this.metric = 1/3.281;
        this.converterType = "Feet Converter: Inches, mm, cm, m:"
    }

    convert(units){
        return (units * this.baseFactor);
        
        //  return "Dette er distansekonverteringsfunksjonen."
    }
}

class pintConverter extends converter {
    constructor(){
        super();
        this.baseFactor = 1/2;
        this.ratio = 1/0.5;
        this.milliMetric = 1/0.002113;
        this.desiMetric = 1/0.2113;
        this.metric = 1/2.113;

        this.converterType = "Pint Converter: Quarts, cups, ml, dl, L"
    }

    convert(units){
        return (units * this.baseFactor);
        
        //  return "Dette er distansekonverteringsfunksjonen."
    }
}

const CONVERTERS = {
    "-f":new feetConverter(),
    "-p":new pintConverter()
}


if(process.argv.length >= 4){

    const selectedUnitType = process.argv[2];
    const numUnits = Number.parseInt(process.argv[3]);
    const converter = CONVERTERS[selectedUnitType];

    console.log(converter.converterType);
    console.log(converter.convert(numUnits));

} else{
    console.log("converter -[dl] units");
}
