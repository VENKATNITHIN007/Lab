# TypeScript Engineering Labs

A collection of TypeScript engineering missions focused on core JavaScript/TypeScript foundations, design patterns, and production-ready implementations.

## Missions

### 01. The Event Emitter
A from-scratch implementation of a Pub/Sub Event Emitter.
- **Concepts:** Closures, Memory Management, TypeScript Generics, Encapsulation.
- **Features:** `on()` subscription, `emit()` execution, private state mapping.

### 02. The Resilient API Client
A production-ready, class-based wrapper around the native `fetch` API.
- **Concepts:** Promises, Async/Await, Error Bubbling, Exponential Backoff.
- **Features:** 
  - Generic typings for strongly-typed JSON responses.
  - Automatic `AbortController` timeouts.
  - Retry logic with Exponential Backoff (`Math.pow`).
  - Separation of default headers and request-specific options.

---
*Built as part of an advanced TypeScript engineering curriculum.*
