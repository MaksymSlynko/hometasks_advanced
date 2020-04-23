function CoffeMake(){}

CoffeMake.prototype.on = function(){
    console.log('Machine on')
}
CoffeMake.prototype.off = function(){
    console.log('Machine off')
}

console.log('-----DRIP COFFEE MACHINE-----')

function DripCoffe(){}

DripCoffe.prototype = CoffeMake.prototype
DripCoffe.prototype.latte = function(){
    console.log('Your latte will be ready in 5 minutes')
}
DripCoffe.prototype.americano = function(){
    console.log('Your americano will be ready in 5 minutes')
}
DripCoffe.prototype.espresso = function(){
    console.log('Your espresso will be ready in 5 minutes')
}
const myDripCoffee = new DripCoffe()
myDripCoffee.on()
myDripCoffee.off()
myDripCoffee.latte()
myDripCoffee.americano()
myDripCoffee.espresso()

console.log('-----ESPRESSO COFFEE MACHINE-----')

function EspressoCofee(){}

EspressoCofee.prototype = DripCoffe.prototype
EspressoCofee.prototype.cappuccino  = function(){
    console.log('Your cappuccino will be ready in 5 minutes')
}
EspressoCofee.prototype.mochachino  = function(){
    console.log('Your mochachino will be ready in 5 minutes')
}
EspressoCofee.prototype.irishWhiskey  = function(){
    console.log('Your Irish Whiskey will be ready in 5 minutes')
}
const myEspressoCoffee = new EspressoCofee()
myEspressoCoffee.on()
myEspressoCoffee.off()
myEspressoCoffee.latte()
myEspressoCoffee.americano()
myEspressoCoffee.espresso()
myEspressoCoffee.cappuccino()
myEspressoCoffee.mochachino()
myEspressoCoffee.irishWhiskey()