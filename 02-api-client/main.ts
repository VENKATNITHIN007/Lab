// ApiClient.ts

export interface ApiClientConfig {
  baseUrl: string;
  defaultHeaders?: Record<string, string>;
  timeoutMs?: number;
  retries?: number;
}

export interface RequestOptions extends RequestInit {
  timeoutMs?: number;
  retries?: number;
}

export class ApiClient {
  private config: ApiClientConfig;

  constructor(config: ApiClientConfig) {
    this.config = config;
  }

  /**
   * Core request method that handles the actual network call.
   * 
   * Features included:
   * - URL Construction: Appends endpoint to the configured baseUrl.
   * - Header Merging: Combines default instance headers with request-specific headers.
   * - Timeout Handling: Aborts the request if it exceeds the specified timeoutMs.
   * - Exponential Backoff: Retries failed requests with increasing delays.
   * - Error Handling: Throws formatted errors for non-2xx HTTP responses.
   * - Generic Typings: Automatically parses and returns strongly-typed JSON data.
   */
  async request<T>(endpoint: string, options: RequestOptions = {}) {
    const maxRetries = options?.retries ?? this.config.retries ?? 3;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        const controller = new AbortController();
        console.log(controller);

        const signal = controller.signal;

        const timeoutId = setTimeout(() => {
          controller.abort();
        }, options?.timeoutMs ?? this.config.timeoutMs);

        const fullUrl = this.config.baseUrl + endpoint;
        const mergedHeaders = {
          ...this.config.defaultHeaders,
          ...options.headers,
        };

        const response = await fetch(fullUrl, {
          ...options,
          headers: mergedHeaders,
          signal: signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(
            `API request failed with status : ${response.status}`,
          );
        }
        const data = await response.json();

        return data;
      } catch (error: any) {
        if (attempt === maxRetries) {
          throw error;
        }

        // We failed, but have retries left. Calculate exponential backoff wait time.
        const waitTime = 1000 * Math.pow(2, attempt);
        console.warn(`Request failed. Retrying in ${waitTime}ms (Attempt ${attempt + 1} of ${maxRetries})`);

        // Pause execution before the next loop iteration
        await new Promise((resolve) => setTimeout(resolve, waitTime));
      }
    }
  }

  /**
   * Helper for GET requests
   */
  async get<T>(
    endpoint: string,
    options?: Omit<RequestOptions, "method">,
  ): Promise<T> {
    const data = await this.request<T>(endpoint, {
      ...options,
      method: "GET",
    });
    return data;
  }

  /**
   * Helper for POST requests
   */
  async post<T>(
    endpoint: string,
    body: any,
    options?: Omit<RequestOptions, "method" | "body">,
  ): Promise<T> {
    const data = await this.request<T>(endpoint, {
      ...options,
      method: "POST",
      body: JSON.stringify(body),
    });
    return data;
  }
}
