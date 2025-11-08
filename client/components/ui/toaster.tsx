import React from "react";
import { ToastProvider, ToastViewport } from "@/components/ui/toast";

// Minimal Toaster that mounts the ToastProvider and viewport.
// The project's `use-toast` hook currently only exposes a `show` function,
// so rendering of toasts is managed elsewhere. This avoids TypeScript
// errors about a `toasts` array that doesn't exist.
export function Toaster() {
  return (
    <ToastProvider>
      <ToastViewport />
    </ToastProvider>
  );
}
