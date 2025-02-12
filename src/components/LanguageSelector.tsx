
import { Language } from "../types/translation";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";

interface LanguageSelectorProps {
  languages: Language[];
  selectedLanguage: string;
  onSelect: (code: string) => void;
}

export const LanguageSelector = ({ languages, selectedLanguage, onSelect }: LanguageSelectorProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {languages.map((lang) => (
        <Card
          key={lang.code}
          className={cn(
            "p-4 cursor-pointer transition-all duration-300 hover:shadow-lg",
            selectedLanguage === lang.code
              ? "border-translation-primary border-2"
              : "hover:border-translation-accent"
          )}
          onClick={() => onSelect(lang.code)}
        >
          <h3 className="font-semibold text-lg">{lang.name}</h3>
          <p className="text-sm text-gray-600">{lang.nativeName}</p>
        </Card>
      ))}
    </div>
  );
};
