import { useNetworkStatus } from "@/hooks/useNetworkStatus";
import { WifiOff } from "lucide-react";

export const NetworkBanner = () => {
  const { isOnline } = useNetworkStatus();

  if (isOnline) return null;

  return (
    <div
      role="alert"
      aria-live="assertive"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-destructive text-destructive-foreground text-xs sm:text-sm font-medium shadow-lg animate-fade-in border border-destructive-foreground/20"
    >
      <WifiOff className="h-4 w-4 animate-pulse shrink-0" />
      <span>You are currently offline. Please check your internet connection.</span>
    </div>
  );
};
