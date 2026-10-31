import type { Locale, Translations } from '@astro-v7/shared/utils/i18n';
import { useTranslations } from '@astro-v7/shared/utils/i18n';
import en from './en.js';
import zh from './zh.js';

type TranslationKey = keyof typeof zh;

const translations: Record<Locale, Translations<TranslationKey>> = { zh, en };

export function t(locale: Locale) {
  return useTranslations(translations[locale] ?? translations.zh);
}
