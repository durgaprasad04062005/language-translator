
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { LanguageSelector } from "./LanguageSelector";
import { SUPPORTED_LANGUAGES } from "../constants/languages";
import { translateText } from "../services/translationService";
import { toast } from "./ui/use-toast";

export const TranslationPanel = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("hi");
  const [isTranslating, setIsTranslating] = useState(false);

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      toast({
        title: "Please enter text to translate",
        variant: "destructive",
      });
      return;
    }

    setIsTranslating(true);
    try {
      const response = await translateText({
        text: inputText,
        targetLang: selectedLanguage,
      });
      setTranslatedText(response.translatedText);
      toast({
        title: "Translation complete",
        description: "Your text has been translated successfully.",
      });
    } catch (error) {
      toast({
        title: "Translation failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsTranslating(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(translatedText);
      toast({
        title: "Copied to clipboard",
        description: "Translation has been copied to your clipboard.",
      });
    } catch (error) {
      toast({
        title: "Failed to copy",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container max-w-6xl mx-auto p-4 space-y-8 animate-fade-in">
      <Card className="p-6 space-y-6 bg-white/95 backdrop-blur-sm">
        <h2 className="text-2xl font-semibold text-center mb-8">
          English to Indian Languages Translator
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <label className="block text-sm font-medium">English Text</label>
            <Textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter text to translate..."
              className="h-40 resize-none"
            />
            <p className="text-sm text-gray-500">
              {inputText.length} characters
            </p>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-medium">Translated Text</label>
            <Textarea
              value={translatedText}
              readOnly
              className="h-40 resize-none bg-gray-50"
              placeholder="Translation will appear here..."
            />
            {translatedText && (
              <Button
                onClick={handleCopy}
                variant="outline"
                className="w-full"
              >
                Copy Translation
              </Button>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Select Target Language</h3>
          <LanguageSelector
            languages={SUPPORTED_LANGUAGES}
            selectedLanguage={selectedLanguage}
            onSelect={setSelectedLanguage}
          />
        </div>

        <Button
          onClick={handleTranslate}
          className="w-full bg-translation-primary hover:bg-translation-primary/90"
          disabled={isTranslating || !inputText.trim()}
        >
          {isTranslating ? "Translating..." : "Translate"}
        </Button>
      </Card>
    </div>
  );
};
