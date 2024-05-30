import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Translator } from '../models/Translator';
import { ObservableTranslatorApi } from './ObservableAPI';

import { TranslatorApiRequestFactory, TranslatorApiResponseProcessor} from "../apis/TranslatorApi";
export class PromiseTranslatorApi {
    private api: ObservableTranslatorApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TranslatorApiRequestFactory,
        responseProcessor?: TranslatorApiResponseProcessor
    ) {
        this.api = new ObservableTranslatorApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 
     * Add a new translator
     * @param translator Translstor object
     */
    public addTranslatorWithHttpInfo(translator: Translator, _options?: Configuration): Promise<HttpInfo<Translator>> {
        const result = this.api.addTranslatorWithHttpInfo(translator, _options);
        return result.toPromise();
    }

    /**
     * 
     * Add a new translator
     * @param translator Translstor object
     */
    public addTranslator(translator: Translator, _options?: Configuration): Promise<Translator> {
        const result = this.api.addTranslator(translator, _options);
        return result.toPromise();
    }

    /**
     * 
     * Deletes a translator
     * @param translatorId translator id to delete
     * @param apiKey 
     */
    public deleteTranslatorWithHttpInfo(translatorId: number, apiKey?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteTranslatorWithHttpInfo(translatorId, apiKey, _options);
        return result.toPromise();
    }

    /**
     * 
     * Deletes a translator
     * @param translatorId translator id to delete
     * @param apiKey 
     */
    public deleteTranslator(translatorId: number, apiKey?: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteTranslator(translatorId, apiKey, _options);
        return result.toPromise();
    }

    /**
     * Find a translator that speaks a given language
     * Finds Translators by lang
     * @param lang Lang that need to be considered for filter
     */
    public findTranslatorsByLangWithHttpInfo(lang: string, _options?: Configuration): Promise<HttpInfo<Array<Translator>>> {
        const result = this.api.findTranslatorsByLangWithHttpInfo(lang, _options);
        return result.toPromise();
    }

    /**
     * Find a translator that speaks a given language
     * Finds Translators by lang
     * @param lang Lang that need to be considered for filter
     */
    public findTranslatorsByLang(lang: string, _options?: Configuration): Promise<Array<Translator>> {
        const result = this.api.findTranslatorsByLang(lang, _options);
        return result.toPromise();
    }

    /**
     * Returns a single translator
     * Find translator by ID
     * @param translatorId ID of translator to return
     */
    public getTranslatorByIdWithHttpInfo(translatorId: number, _options?: Configuration): Promise<HttpInfo<Translator>> {
        const result = this.api.getTranslatorByIdWithHttpInfo(translatorId, _options);
        return result.toPromise();
    }

    /**
     * Returns a single translator
     * Find translator by ID
     * @param translatorId ID of translator to return
     */
    public getTranslatorById(translatorId: number, _options?: Configuration): Promise<Translator> {
        const result = this.api.getTranslatorById(translatorId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Update an existing translator
     * @param translator Translstor object
     */
    public updateTranslatorWithHttpInfo(translator: Translator, _options?: Configuration): Promise<HttpInfo<Translator>> {
        const result = this.api.updateTranslatorWithHttpInfo(translator, _options);
        return result.toPromise();
    }

    /**
     * 
     * Update an existing translator
     * @param translator Translstor object
     */
    public updateTranslator(translator: Translator, _options?: Configuration): Promise<Translator> {
        const result = this.api.updateTranslator(translator, _options);
        return result.toPromise();
    }

    /**
     * 
     * Updates a translator in the store with form data
     * @param translatorId ID of translator that needs to be updated
     * @param name Updated name of the translator
     * @param lang Updated language of the translator
     */
    public updateTranslatorWithFormWithHttpInfo(translatorId: number, name?: string, lang?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.updateTranslatorWithFormWithHttpInfo(translatorId, name, lang, _options);
        return result.toPromise();
    }

    /**
     * 
     * Updates a translator in the store with form data
     * @param translatorId ID of translator that needs to be updated
     * @param name Updated name of the translator
     * @param lang Updated language of the translator
     */
    public updateTranslatorWithForm(translatorId: number, name?: string, lang?: string, _options?: Configuration): Promise<void> {
        const result = this.api.updateTranslatorWithForm(translatorId, name, lang, _options);
        return result.toPromise();
    }


}



