import { useNetworkStatus } from "@/hooks/useNetworkStatus";
import { WifiOff } from "lucide-react";

export const NetworkBanner = () => {
  const { isOnline } = useNetworkStatus();

  if (isOnline) return null;

  return (
    <aside
      role="alert"
      aria-live="assertive"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-foreground text-background text-xs font-mono shadow-md border border-border"
    >
      <WifiOff className="w-3.5 h-3.5 text-primary shrink-0" />
      <span>Offline mode active. Check network connection.</span>
    </aside>
  );
};
