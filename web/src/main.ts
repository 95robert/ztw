import { platformBrowserDynamic }  from '@angular/platform-browser-dynamic';
import { getTranslationProviders } from './app/i18n-providers';

import { AppModule } from './app/app.module';
import {enableProdMode} from "@angular/core";

enableProdMode();
getTranslationProviders().then(providers => {
    const options = { providers };
    platformBrowserDynamic().bootstrapModule(AppModule, options);
});
