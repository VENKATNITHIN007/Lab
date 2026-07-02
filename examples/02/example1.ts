// 1. class

class chef {
    resturantName:string;
   constructor(resturantName:string){
    this.resturantName = resturantName;
   }
}

const chef1 = new chef("venkat")
const chef2 = new chef("nithin")

console.log(chef1, chef2)


// 2. spread

const defaultStrickers = {fragile:true,priority:"low"}
const customStickers = {priority:"high"}

const mergedStickers = { ...customStickers,...defaultStrickers}
console.log(mergedStickers)


// 3. rest 

function makeBurger(bun:string, meat:string, ...toppings:string[]) {
   console.log("Bun:", bun);
   console.log("Meat:", meat);
   console.log("Toppings:", toppings);
}

makeBurger("sesame", "beef", "lettuce", "tomato", "cheese");