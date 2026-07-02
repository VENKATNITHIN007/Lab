# Mission 02: The Resilient API Client

## 🎯 Summary
A robust, class-based wrapper around the native browser `fetch` API. It abstracts away the repetitive boilerplate of making network requests while adding critical fail-safes like automatic retries and timeouts.

## 🤔 Why we built it
The native `fetch` API is great, but it requires 10 lines of code just to make a safe request, parse JSON, and handle errors. If you have 50 requests in your app, that's 500 lines of messy code. This class centralizes that logic into a single, clean utility.

## 🛠️ Where it's used in the real world
- **Enterprise Applications:** Almost every large tech company builds a custom "API Client" wrapper like this instead of using raw `fetch`.
- **SDKs:** When companies like Stripe or Discord release a JavaScript SDK, it looks exactly like this under the hood.

## 🧠 Concepts Learned
- **Error Bubbling:** Why we `throw error` upwards so the UI layer can catch it and display it to the user.
- **Exponential Backoff:** Using `Math.pow` to gradually increase wait times between retries to prevent crushing a struggling server (Thundering Herd problem).
- **Timeouts & AbortController:** Linking an `AbortController` to a `setTimeout` to forcefully kill a network request if the server hangs indefinitely.
- **Advanced Configuration:** How to cleanly merge global default options (like auth headers) with request-specific options.

## 🚀 Future Improvements
- **Authentication Interceptors:** Automatically inject a JWT bearer token into the headers before every request.
- **Caching Layer:** Store successful responses in memory so duplicate requests resolve instantly without hitting the network.
- **Request Deduplication:** If two components ask for the same URL at the exact same millisecond, only send one network request and share the result.

## 💻 Usage Example
```typescript
import { ApiClient } from './main';

const client = new ApiClient({
  baseUrl: "https://jsonplaceholder.typicode.com",
  timeoutMs: 5000,
  retries: 3
});

async function fetchUser() {
  try {
    const data = await client.get<{ id: number; name: string }>("/users/1");
    console.log("User:", data.name);
  } catch (error) {
    console.error("Failed:", error);
  }
}
```
