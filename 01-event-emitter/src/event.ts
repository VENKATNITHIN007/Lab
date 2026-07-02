//  comment out script in index.html to run 

export class EventEmitter {
// creating empty object inside new object for events 
// private in ts keyword, remove it you can see the error in the test file is gone 
private events: Record<string, Array<Function>> = {}
constructor () {
}
// creating a on functions where its used to subscribe their functions for an eventName
on(eventsName:string,callback:Function){

if(!this.events[eventsName]){
    this.events[eventsName] = []
}
this.events[eventsName].push(callback)
}
// this is execution this is where they call functions , it will execute all the functions for that event 
emit(eventName:string, name:string){
   const listeners = this.events[eventName]
   if(listeners){
    listeners.forEach(element => {
        element(name);
    });
   }
}
} 

// 1. Create our manager
const myEmitter = new EventEmitter();

// 2. Subscribe Function A to the "hello" event
myEmitter.on("hello", () => {
  console.log("Function A says: Hello there!");
});

// 3. Subscribe Function B to the same "hello" event
myEmitter.on("hello", () => {
  console.log("Function B says: Hi! I am also listening!");
});

// 4. TRIGGER the event!
myEmitter.emit("hello","notrequired"); 