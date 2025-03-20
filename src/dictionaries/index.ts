import { Locale } from '@/i18n';
import en from './en.json';
import ko from './ko.json';

const dictionaries = {
  en,
  ko,
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
