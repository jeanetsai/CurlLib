
<JS classses>
01.JavaScript classes demystified
done
02.Course prerequisites
done
03.Using the exercise files
done
04.Introduction to classes
- class改變，所有繼承自他的child都會改變
- 必須declare first
- classes aren't hoisted
- 2 ways to define classes:
-- class declarations
-- expressions
---------------------------------------
var Car = class{
	constructor(doors,engine,color){
		this.doors = doors;
		this.engine = engine;
		this.color = color;
	}
};

const cx5 = new Car(4, 'V6', 'grey');

//functions & methods
carStats(){
	return `This car has $(this.doors) doors,
	a ${this.engine} engine and a beautiful ${this.color}`;
};

---------------------------------------
05.Defining a class

class Car {
    //類別名稱Car
	constructor(doors, engine, color) {
    
		this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

    carStats() {
		//method carStats
        return `This car has ${this.doors} doors, a ${this.engine} engine and a beautiful ${this.color} color!`;
    }
}

const cx5 = new Car( 4, 'V6', 'grey');
//instant of the class:cx5

console.log(cx5);
console.log(cx5.carStats());//function&method carStats

06.Differences between functions and classes

- Funtion會hoisted, class則不會hoisted
- Functions會被覆寫
can be overwritten
classs則不會被覆寫

07.Hoisting explained with classes

// this code will run fine as the function is hoisted
//function sayHi會hoisting所以呼叫他的可以放前面
sayHi();

class Car {
	//類別放前面 要在用之前宣告
	//類別不hoisting
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

    carStats() {
        return `This car has ${this.doors} doors, a ${this.engine} engine and a beautiful ${this.color} color!`;
    }
}

const cx5 = new Car( 4, 'V6', 'grey');

console.log(cx5);
console.log(cx5.carStats());

function sayHi() {
	//function sayHi會hoisting
    return console.log('Hello this function can be called anywhere!');
}

sayHi();//呼叫function sayHi可以放最前面也可以放funcion後面

08.Strict mode with classes explained
done
09.Static methods and usage
Static methods are methods
that aren't accessible through
an instance of a class,
but only available
through the class itself.
They are usually created
for utility functions
that don't relate to the
instance of the class.


-----------------------------------

class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

    carStats() {
		//在class Car之下的method carStats
        return `This car has ${this.doors} doors, a ${this.engine} engine and a beautiful ${this.color} color!`;
    }

    static totalDoors(car1, car2) {
		//在class Car之下的static method
		//totalDoors
		
        const doors1 = car1.doors;
        const doors2 = car2.doors;

        return doors1 + doors2;
    }
}

const cx5 = new Car(4,'V6','grey');
const civic = new Car(3,'V4','blue');

console.log(cx5);
console.log(cx5.carStats());
console.log(civic);
console.log(civic.carStats());
//method:carStats
//This car has 4 doors, a V6 engine and a beautiful grey color!
//This car has 3 doors, a V4 engine and a beautiful blue color!

console.log(Car.totalDoors(cx5, civic));//return 4+3=7
//static method totalDoors



10.Prototype methods explained
承上範例
~> cs5.color.toString //轉字串
~> //output: "grey"

~> cs5.doors.toString //數字轉字串
~> //output: "4"

11.Introduction to constructors

每個class只有一個constructor

constructor功用:
build or initiate object for us


---------------------------------

class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

}

const cx5 = new Car(4,'V6','grey');


12.Constructor and super usage


class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

    carStats() {
        return `This car has ${this.doors} doors, a ${this.engine} engine and a beautiful ${this.color} color!`;
    }

    static totalDoors(car1, car2) {
        const doors1 = car1.doors;
        const doors2 = car2.doors;

        return doors1 + doors2;
    }
}

//新類別SUV extends from類別Car
class SUV extends Car {
	//pass values
    constructor(doors, engine, color, brand, carStats) {
       super(doors, engine, color, carStats);
	   //將舊的類別Car之物取入
	   
	   //assign value
       this.brand = brand;
       this.wheels = 4;
       this.ac = true; 
    }

	//function specifit to SUV
    myBrand() {
        return console.log(`This SUV is a ${this.brand}`);
        
    }
}

const cx5 = new SUV(4,'V6','grey', 'mazda');//brand='mazda'
const civic = new Car(3,'V4','blue');

console.log(cx5);
console.log(cx5.myBrand());
//output:This SUV is a mazda


// console.log(cx5.carStats());
// console.log(civic);
// console.log(civic.carStats());
// console.log(Car.totalDoors(cx5, civic));

13.Extends intro and usage
React.js----------------------------

import React, { Component } from 'react';//from react library

//create Button component
//create from class Component
class Button extends Component {
    render() {
        return ( <button>Hello</button> )
    }
}

export default Button;

----------------------------------
class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

    carStats() {
        return `This car has ${this.doors} doors, a ${this.engine} engine and a beautiful ${this.color} color!`;
    }

    static totalDoors(car1, car2) {
        const doors1 = car1.doors;
        const doors2 = car2.doors;

        return doors1 + doors2;
    }
}

class SUV extends Car {
    constructor(doors, engine, color, brand, carStats) {
       super(doors, engine, color, carStats);
       this.brand = brand;
       this.wheels = 4;
       this.ac = true; 
    }

    myBrand() {
        return console.log(`This SUV is a ${this.brand}`);
        
    }
}

const cx5 = new SUV(4,'V6','grey', 'mazda');
const civic = new Car(3,'V4','blue');

console.log(cx5);
console.log(cx5.myBrand());

// console.log(cx5.carStats());
// console.log(civic);
// console.log(civic.carStats());
// console.log(Car.totalDoors(cx5, civic));

14.Mixins intro and usage

Mixins: 許多個 class extend from a class


React.js----------------------
import React, { Component } from 'react';

class Button extends Component {
    render() {
        return ( <button>Hello</button> )
    }
}

export default Button;
------------------------------
let mixin = {
	//function madeIn
    madeIn() {
        console.log('This car was made in year 2019!');
    }
}

let carMixin = {
	//carMixin add to prototype
    __proto__: mixin,

    madeIn() {
        super.madeIn();
    }
};

class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

    carStats() {
        return `This car has ${this.doors} doors, a ${this.engine} engine and a beautiful ${this.color} color!`;
    }

    static totalDoors(car1, car2) {
        const doors1 = car1.doors;
        const doors2 = car2.doors;

        return doors1 + doors2;
    }
}

class SUV extends Car {
    constructor(doors, engine, color, brand, carStats) {
       super(doors, engine, color, carStats);
       this.brand = brand;
       this.wheels = 4;
       this.ac = true; 

       // assign mixin
       Object.assign(this, carMixin);
    }

    myBrand() {
        return console.log(`This SUV is a ${this.brand}`);
        
    }
}

const cx5 = new SUV(4,'V6','grey', 'mazda');
const civic = new Car(3,'V4','blue');

console.log(cx5);
console.log(cx5.myBrand());

//madeIn function
console.log(cx5.madeIn());
//output:'This car was made in year 2019!'

// console.log(cx5.carStats());
// console.log(civic);
// console.log(civic.carStats());
// console.log(Car.totalDoors(cx5, civic));

15.Next steps
done

Source: JS classes
====================================
<JS prototype>
04.Create object literals
---------------------------------------
<Object literals>
let name = {
	key1: value1,
	key2: value2
	};
---------------------------------------
      if (dataObject.category === 'arrangement') {
        newItem = {
          type: 'floral',
          storage: 'cool',
          name: dataObject.itemname,
          vase: dataObject.vasetype,
          quantity: dataObject.qty,
          logItem: function() {
            console.log('%c' + this.name,'font-weight: bold');
            for (let prop in this) {
              console.log(' ', prop, ': ', this[prop])
            }
          }
        }
---------------------------------------
			newItem.flowers[key] = {};
              newItem.flowers[key][stemName] = dataObject[item];
              newItem.flowers[key].type = 'floral';
---------------------------------------
			              } else {
              // add new item specifying only name and quantity
              newItem.flowers[key] = {
                Default: dataObject[item],
                type: 'floral'
---------------------------------------				
05.Create objects with a constructor 
---------------------------------------

//constructor最好以大寫開頭 比較好讀
  function Arrangement(name, vase, quantity = 1) {
    this.type = 'floral';
    this.storage = 'cool';
    this.name = name;
    this.vase = vase;
    this.quantity = quantity;
    this.logItem = function() {
      console.log('%c' + this.name,'font-weight: bold');
      for (let prop in this) {
        console.log(' ', prop, ': ', this[prop])
      }
    };
  }
  function Live(name, pot, quantity = 1) {
    this.type = 'floral';
    this.storage = 'warm';
    this.name = name;
    this.pot = pot;
    this.quantity = quantity;
    this.logItem = function() {
      console.log('%c' + this.name,'font-weight: bold');
      for (let prop in this) {
        console.log(' ', prop, ': ', this[prop])
      }
    };
  }
  function Bouquet(name, vase) {
    this.type = 'floral';
    this.storage = 'cool';
    this.name = name;
    this.vase = vase;
    this.logItem = function() {
      console.log('%c' + this.name,'font-weight: bold');
      for (let prop in this) {
        console.log(' ', prop, ': ', this[prop])
      }
    };
    //sub object
	this.flowers = {
      addStem: function(name, quantity = 1, color = 'Default') {
        this[name] = new Flower(quantity, color)
      }
    }
  }
  function Flower(quantity, color) {
    this[color] = quantity;
    this.logItem = function() {
      console.log('%c' + this.name,'font-weight: bold');
      for (let prop in this) {
        console.log(' ', prop, ': ', this[prop])
      }
    };
  }
---------------------------------------
        newItem = new Arrangement(dataObject.itemname, dataObject.vasetype, dataObject.qty);
---------------------------------------
        newItem = new Live(dataObject.itemname, dataObject.pottype, dataObject.qty);
---------------------------------------
              newItem.flowers.addStem(key, dataObject[item], dataObject['color' + stemType]);
---------------------------------------
              newItem.flowers.addStem(key, dataObject[item]);

---------------------------------------
06.Understand the prototype property
用prototype object創立許多objects
07.Modify an object's prototype
-----------------------------------
//constructor
let Name = function(){
	this.key1: value1,
	this.key2: value2
};
Name.prototype.key3 = value3;
Name.prototype.key4 = value4;
-----------------------------------
  function Arrangement(name, vase, quantity = 1) {
    this.name = name;
    this.vase = vase;
    this.quantity = quantity;
  }
  Arrangement.prototype.type = 'floral';
  Arrangement.prototype.storage = 'cool';
  Arrangement.prototype.logItem = function() {
    console.log('%c' + this.name,'font-weight: bold');
    for (let prop in this) {
      console.log(' ', prop, ': ', this[prop])
    }
  };

  function Live(name, pot, quantity = 1) {
    this.name = name;
    this.pot = pot;
    this.quantity = quantity;
  }
  Live.prototype.type = 'floral';
  Live.prototype.storage = 'warm';
  Live.prototype.logItem = function() {
    console.log('%c' + this.name,'font-weight: bold');
    for (let prop in this) {
      console.log(' ', prop, ': ', this[prop])
    }
  };

  function Bouquet(name, vase) {
    this.name = name;
    this.vase = vase;
  }
  Bouquet.prototype.type = 'floral';
  Bouquet.prototype.storage = 'cool';
  Bouquet.prototype.logItem = function() {
    console.log('%c' + this.name,'font-weight: bold');
    for (let prop in this) {
      console.log(' ', prop, ': ', this[prop])
    }
  };
08.Create a prototype chain
prototype chain/inheritance:
新prototype繼承自另一個prototype

本範例有4個constructor
Arrangement, Live, Bouquet, Flower(自訂)
各自有他的 "type"(自訂) property
以及 "logItem"(自訂) method
-----------------------------------
本範例Arrangement和Bouquet繼承自Cut
Cut,Live,Flower繼承自Item
-----------------------------------
  Live.prototype = new Item();
//Live繼承自Item constructor
//Item是parent of the prototype chain
-----------------------------------
  function Cut() {};
  Cut.prototype = new Item();
  //Cut繼承自Item()
  Cut.prototype.storage = 'cool';
-----------------------------------
  Arrangement.prototype = new Cut();
  //Arrangement繼承自Cut
-----------------------------------
09.Apply prototypal inheritance
-----------------------------------
本範例Arrangement和Bouquet繼承自Cut
Cut,Live,Flower繼承自Item
-----------------------------------
  function Item() {};
  //Item constructor
  Item.prototype.type = 'goods';
  //Item property:type
  Item.prototype.logItem = function() {
	//Item method:logItem
    console.log('%c' + this.name,'font-weight: bold');
    for (let prop in this) {
      console.log(' ', prop, ': ', this[prop])
    }
  };
-----------------------------------

10.Understand ES6 classes

繼承自class constructor
extends keyword chains prototype
Transpile to prototype-based code

11.Build prototypes using ES6 classes

class Live extends Item
//Live繼承自Item
super(); //super() call: fetch content from parent class

12.Next steps
done
