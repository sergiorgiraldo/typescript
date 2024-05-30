import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Translator } from '../models/Translator';

import { ObservableTranslatorApi } from "./ObservableAPI";
import { TranslatorApiRequestFactory, TranslatorApiResponseProcessor} from "../apis/TranslatorApi";

export interface TranslatorApiAddTranslatorRequest {
    /**
     * Translstor object
     * @type Translator
     * @memberof TranslatorApiaddTranslator
     */
    translator: Translator
}

export interface TranslatorApiDeleteTranslatorRequest {
    /**
     * translator id to delete
     * @type number
     * @memberof TranslatorApideleteTranslator
     */
    translatorId: number
    /**
     * 
     * @type string
     * @memberof TranslatorApideleteTranslator
     */
    apiKey?: string
}

export interface TranslatorApiFindTranslatorsByLangRequest {
    /**
     * Lang that need to be considered for filter
     * @type string
     * @memberof TranslatorApifindTranslatorsByLang
     */
    lang: string
}

export interface TranslatorApiGetTranslatorByIdRequest {
    /**
     * ID of translator to return
     * @type number
     * @memberof TranslatorApigetTranslatorById
     */
    translatorId: number
}

export interface TranslatorApiUpdateTranslatorRequest {
    /**
     * Translstor object
     * @type Translator
     * @memberof TranslatorApiupdateTranslator
     */
    translator: Translator
}

export interface TranslatorApiUpdateTranslatorWithFormRequest {
    /**
     * ID of translator that needs to be updated
     * @type number
     * @memberof TranslatorApiupdateTranslatorWithForm
     */
    translatorId: number
    /**
     * Updated name of the translator
     * @type string
     * @memberof TranslatorApiupdateTranslatorWithForm
     */
    name?: string
    /**
     * Updated language of the translator
     * @type string
     * @memberof TranslatorApiupdateTranslatorWithForm
     */
    lang?: string
}

export class ObjectTranslatorApi {
    private api: ObservableTranslatorApi

    public constructor(configuration: Configuration, requestFactory?: TranslatorApiRequestFactory, responseProcessor?: TranslatorApiResponseProcessor) {
        this.api = new ObservableTranslatorApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 
     * Add a new translator
     * @param param the request object
     */
    public addTranslatorWithHttpInfo(param: TranslatorApiAddTranslatorRequest, options?: Configuration): Promise<HttpInfo<Translator>> {
        return this.api.addTranslatorWithHttpInfo(param.translator,  options).toPromise();
    }

    /**
     * 
     * Add a new translator
     * @param param the request object
     */
    public addTranslator(param: TranslatorApiAddTranslatorRequest, options?: Configuration): Promise<Translator> {
        return this.api.addTranslator(param.translator,  options).toPromise();
    }

    /**
     * 
     * Deletes a translator
     * @param param the request object
     */
    public deleteTranslatorWithHttpInfo(param: TranslatorApiDeleteTranslatorRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteTranslatorWithHttpInfo(param.translatorId, param.apiKey,  options).toPromise();
    }

    /**
     * 
     * Deletes a translator
     * @param param the request object
     */
    public deleteTranslator(param: TranslatorApiDeleteTranslatorRequest, options?: Configuration): Promise<void> {
        return this.api.deleteTranslator(param.translatorId, param.apiKey,  options).toPromise();
    }

    /**
     * Find a translator that speaks a given language
     * Finds Translators by lang
     * @param param the request object
     */
    public findTranslatorsByLangWithHttpInfo(param: TranslatorApiFindTranslatorsByLangRequest, options?: Configuration): Promise<HttpInfo<Array<Translator>>> {
        return this.api.findTranslatorsByLangWithHttpInfo(param.lang,  options).toPromise();
    }

    /**
     * Find a translator that speaks a given language
     * Finds Translators by lang
     * @param param the request object
     */
    public findTranslatorsByLang(param: TranslatorApiFindTranslatorsByLangRequest, options?: Configuration): Promise<Array<Translator>> {
        return this.api.findTranslatorsByLang(param.lang,  options).toPromise();
    }

    /**
     * Returns a single translator
     * Find translator by ID
     * @param param the request object
     */
    public getTranslatorByIdWithHttpInfo(param: TranslatorApiGetTranslatorByIdRequest, options?: Configuration): Promise<HttpInfo<Translator>> {
        return this.api.getTranslatorByIdWithHttpInfo(param.translatorId,  options).toPromise();
    }

    /**
     * Returns a single translator
     * Find translator by ID
     * @param param the request object
     */
    public getTranslatorById(param: TranslatorApiGetTranslatorByIdRequest, options?: Configuration): Promise<Translator> {
        return this.api.getTranslatorById(param.translatorId,  options).toPromise();
    }

    /**
     * 
     * Update an existing translator
     * @param param the request object
     */
    public updateTranslatorWithHttpInfo(param: TranslatorApiUpdateTranslatorRequest, options?: Configuration): Promise<HttpInfo<Translator>> {
        return this.api.updateTranslatorWithHttpInfo(param.translator,  options).toPromise();
    }

    /**
     * 
     * Update an existing translator
     * @param param the request object
     */
    public updateTranslator(param: TranslatorApiUpdateTranslatorRequest, options?: Configuration): Promise<Translator> {
        return this.api.updateTranslator(param.translator,  options).toPromise();
    }

    /**
     * 
     * Updates a translator in the store with form data
     * @param param the request object
     */
    public updateTranslatorWithFormWithHttpInfo(param: TranslatorApiUpdateTranslatorWithFormRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateTranslatorWithFormWithHttpInfo(param.translatorId, param.name, param.lang,  options).toPromise();
    }

    /**
     * 
     * Updates a translator in the store with form data
     * @param param the request object
     */
    public updateTranslatorWithForm(param: TranslatorApiUpdateTranslatorWithFormRequest, options?: Configuration): Promise<void> {
        return this.api.updateTranslatorWithForm(param.translatorId, param.name, param.lang,  options).toPromise();
    }

}
