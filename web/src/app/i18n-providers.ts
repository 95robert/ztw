import { TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID } from '@angular/core';
export function getTranslationProviders(): Promise<Object[]> {
    // Get the locale id from the global
    const locale = document['locale'] as string;
    console.log('Locale: ', locale);
    // return no providers if fail to get translation file for locale
    const noProviders: Object[] = [];
    // No locale or U.S. English: no translation providers
    if (!locale || locale === 'en-US'! || locale === 'en') {
        return Promise.resolve(noProviders);
    }
    // Ex: 'locale/messages.pl.xlf`
    const translationFile = `./src/locale/messages.${locale}.xlf`;
    return getTranslationsWithSystemJs(translationFile)
        .then( (translations: string ) => {
            return [
                { provide: TRANSLATIONS, useValue: translations },
                { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
                { provide: LOCALE_ID, useValue: locale }
            ];
        })
        .catch(() => noProviders); // ignore if file not found
}
declare var System: any;
function getTranslationsWithSystemJs(file: string) {
    return System.import(file + '!text'); // relies on text plugin
}
