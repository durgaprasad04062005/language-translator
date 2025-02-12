
export interface Language {
  code: string;
  name: string;
  nativeName: string;
}

export interface TranslationRequest {
  text: string;
  targetLang: string;
}

export interface TranslationResponse {
  translatedText: string;
  detectedLanguage?: string;
}
