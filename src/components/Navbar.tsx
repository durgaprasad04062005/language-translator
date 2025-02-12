
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50",
      "bg-white/80 backdrop-blur-md border-b",
      "px-4 h-16 flex items-center"
    )}>
      <div className="container max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Globe className="h-6 w-6 text-translation-primary" />
          <span className="text-xl font-semibold">translation.io</span>
        </div>
      </div>
    </nav>
  );
};
