# Mission 01: The Event Emitter

## 🎯 Summary
A custom, from-scratch implementation of the Publisher/Subscriber (Pub/Sub) pattern. This is the underlying architecture behind Node.js `EventEmitter`, browser DOM events (`addEventListener`), and many modern state management libraries.

## 🤔 Why we built it
To understand how JavaScript handles custom events, memory management, and callback execution without relying on magic or third-party libraries.

## 🛠️ Where it's used in the real world
- **Node.js:** The entire `fs` (file system) and `http` modules run on EventEmitters.
- **Frontend:** State management tools like Redux or Zustand use this exact pattern to notify React components when the state changes.
- **WebSockets:** Listening for incoming chat messages.

## 🧠 Concepts Learned
- **Closures & Scope:** How functions remember the variables around them.
- **Data Structures:** Using a JavaScript `Record` (object) to map a single string (`eventName`) to an Array of functions.
- **TypeScript Generics:** How to pass strict typings so the callback functions know exactly what data they are receiving.
- **Encapsulation:** Using the `private` keyword so external code cannot accidentally wipe out the `events` object.

## 🚀 Future Improvements
- Add an `off(eventName, callback)` method to let users unsubscribe and free up memory.
- Add a `once(eventName, callback)` method that listens exactly one time and then automatically deletes itself.

## 💻 Usage Example
```typescript
import { EventEmitter } from './event';

const events = new EventEmitter();

// Subscribe
events.on("payment-success", (name: string) => {
    console.log(`Printing receipt for ${name}`);
});

// Trigger
events.emit("payment-success", "Alice"); 
```
