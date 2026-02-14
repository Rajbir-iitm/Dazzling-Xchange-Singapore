export interface TranslationCheck {
  language: string;
  code: string;
  hasCompleteTranslations: boolean;
  missingKeys: string[];
}

export const REQUIRED_KEYS = [
  // FX Risk Management 4 cards
  'services.fx.manager.title',
  'services.fx.manager.description',
  'services.fx.fixed.title', 
  'services.fx.fixed.description',
  'services.fx.window.title',
  'services.fx.window.description',
  'services.fx.nondeliverable.title',
  'services.fx.nondeliverable.description',
  // Payments Features 8 cards
  'services.payments.features.global',
  'services.payments.features.fast',
  'services.payments.features.seamless',
  'services.payments.features.platform',
  'services.payments.features.integrated',
  'services.payments.features.effortless',
  'services.payments.features.solution',
  'services.payments.features.currencies',
  // Payments Bullets 4 items
  'services.payments.bullets.accounts',
  'services.payments.bullets.receive',
  'services.payments.bullets.convert',
  'services.payments.bullets.payments'
];

export function checkTranslationCompleteness(): TranslationCheck[] {
  // For now, we'll manually define which languages have complete translations
  // This could be automated with a build script that checks the actual JSON files
  
  // Only languages with complete translations for all pages (<20% untranslated content)
  // Verified complete: en, es, fr, zh. Others excluded from settings dropdown.
  const results: TranslationCheck[] = [
    { language: 'English', code: 'en', hasCompleteTranslations: true, missingKeys: [] },
    { language: 'Español', code: 'es', hasCompleteTranslations: true, missingKeys: [] },
    { language: 'Français', code: 'fr', hasCompleteTranslations: true, missingKeys: [] },
    { language: '中文', code: 'zh', hasCompleteTranslations: true, missingKeys: [] },
    { language: 'Italiano', code: 'it', hasCompleteTranslations: false, missingKeys: REQUIRED_KEYS },
    { language: 'Português', code: 'pt', hasCompleteTranslations: false, missingKeys: REQUIRED_KEYS },
    { language: 'Deutsch', code: 'de', hasCompleteTranslations: false, missingKeys: REQUIRED_KEYS },
    { language: '日本語', code: 'ja', hasCompleteTranslations: false, missingKeys: REQUIRED_KEYS },
    { language: '한국어', code: 'ko', hasCompleteTranslations: false, missingKeys: REQUIRED_KEYS },
    { language: 'العربية', code: 'ar', hasCompleteTranslations: false, missingKeys: REQUIRED_KEYS },
    { language: 'हिन्दी', code: 'hi', hasCompleteTranslations: false, missingKeys: REQUIRED_KEYS },
    { language: 'Русский', code: 'ru', hasCompleteTranslations: false, missingKeys: REQUIRED_KEYS },
    { language: 'ไทย', code: 'th', hasCompleteTranslations: false, missingKeys: REQUIRED_KEYS },
    { language: 'Tiếng Việt', code: 'vi', hasCompleteTranslations: false, missingKeys: REQUIRED_KEYS },
    { language: 'Bahasa Indonesia', code: 'id', hasCompleteTranslations: false, missingKeys: REQUIRED_KEYS },
    { language: 'Bahasa Melayu', code: 'ms', hasCompleteTranslations: false, missingKeys: REQUIRED_KEYS },
    { language: 'Filipino', code: 'tl', hasCompleteTranslations: false, missingKeys: REQUIRED_KEYS },
    { language: 'বাংলা', code: 'bn', hasCompleteTranslations: false, missingKeys: REQUIRED_KEYS },
    { language: 'اردو', code: 'ur', hasCompleteTranslations: false, missingKeys: REQUIRED_KEYS },
    { language: 'தமிழ்', code: 'ta', hasCompleteTranslations: false, missingKeys: REQUIRED_KEYS }
  ];
  
  return results;
}

export function getAvailableLanguages(): Array<{code: string, name: string}> {
  const translationCheck = checkTranslationCompleteness();
  const availableLanguages = translationCheck
    .filter(lang => lang.hasCompleteTranslations)
    .map(lang => ({ 
      code: lang.code, 
      name: `languages.${lang.code}` 
    }));
  
  return availableLanguages;
}
