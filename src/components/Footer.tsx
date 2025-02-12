
import { Github, Globe, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export const Footer = () => {
  return (
    <footer className={cn(
      "w-full bg-white border-t",
      "py-6 mt-8"
    )}>
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-translation-primary" />
              <span className="text-lg font-semibold">translation.io</span>
            </div>
            <p className="text-sm text-gray-600">
              Breaking language barriers with AI-powered translations for Indian languages.
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-semibold">Supported Languages</h3>
            <div className="text-sm text-gray-600 grid grid-cols-2 gap-2">
              <span>Hindi</span>
              <span>Tamil</span>
              <span>Telugu</span>
              <span>Kannada</span>
              <span>Bengali</span>
              <span>Malayalam</span>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">About</h3>
            <p className="text-sm text-gray-600">
              An open-source project dedicated to making content accessible across Indian languages.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-translation-primary" />
              <span>for India</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} translation.io. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
