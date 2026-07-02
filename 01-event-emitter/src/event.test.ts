import {test,expect} from 'vitest';
import { EventEmitter } from "./event.ts";


test("should trigger callback when a event is emitted", ()=>{

    const event = new EventEmitter;
    let hasRun = false;
    event.on("test-event",(name:string)=>{
        const userName = name
        console.log(`hello this is test ${userName}`)
        hasRun = true;
        console.log(event.events)
    })
    event.emit("test-event","not-required")

    expect (hasRun).toBe(true)
})

/*
the funtion A and B are running because we imported eventEmitter the new instance we created dont have a and b funtions which we created at last of main file 
every new object is diffrent and starts with empty cabinet
*/