// Generic runtime error reporter — forwards errors to the console and
// any custom handler registered on window.__appReportError.

declare global {
  interface Window {
    __appReportError?: (payload: {
      message: string;
      stack?: string;
      filename?: string;
      context?: Record<string, unknown>;
    }) => void;
  }
}

export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  const stack = error instanceof Error ? error.stack : undefined;
  const message = describeThrown(error);

  console.error("[ErrorBoundary]", message, context);

  window.__appReportError?.({
    message,
    ...(stack !== undefined && { stack }),
    filename: window.location.pathname,
    context,
  });
}

const MAX_SERIALIZED_LENGTH = 2000;

function describeThrown(error: unknown): string {
  if (error instanceof Response) {
    return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
  }
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  const { message } = (error ?? {}) as { message?: unknown };
  if (typeof message === "string" && message.length > 0) return message;
  try {
    return JSON.stringify(error)?.slice(0, MAX_SERIALIZED_LENGTH) ?? String(error);
  } catch {
    return String(error);
  }
}

