// even though i not linked event.ts to index.html but we have imported here so its exceuted and you can see the consoles"
import { EventEmitter } from "./event";
const event = new EventEmitter();

event.on("payment-success",(name:string)=>{
    const userName= name
    console.log(`printing receipt for ${userName} `)
})

event.on("payment-success",(name:string)=>{
    const userName= name
    console.log(`updating something for ${userName} `)
})

event.on("payment-success",(name:string)=>{
    const userName= name
    console.log(`deleting something for  ${userName} `)
})

event.emit("payment-success","alice")