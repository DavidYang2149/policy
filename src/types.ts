import { Locale } from './i18n';

export interface PageParams {
  lang: Locale;
}

export interface PageProps {
  params: Promise<PageParams>;
  searchParams?: { [key: string]: string | string[] | undefined };
}
