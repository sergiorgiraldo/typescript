import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { Translator } from '../models/Translator';

import { TranslatorApiRequestFactory, TranslatorApiResponseProcessor} from "../apis/TranslatorApi";
export class ObservableTranslatorApi {
    private requestFactory: TranslatorApiRequestFactory;
    private responseProcessor: TranslatorApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TranslatorApiRequestFactory,
        responseProcessor?: TranslatorApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TranslatorApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TranslatorApiResponseProcessor();
    }

    /**
     * 
     * Add a new translator
     * @param translator Translstor object
     */
    public addTranslatorWithHttpInfo(translator: Translator, _options?: Configuration): Observable<HttpInfo<Translator>> {
        const requestContextPromise = this.requestFactory.addTranslator(translator, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addTranslatorWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Add a new translator
     * @param translator Translstor object
     */
    public addTranslator(translator: Translator, _options?: Configuration): Observable<Translator> {
        return this.addTranslatorWithHttpInfo(translator, _options).pipe(map((apiResponse: HttpInfo<Translator>) => apiResponse.data));
    }

    /**
     * 
     * Deletes a translator
     * @param translatorId translator id to delete
     * @param apiKey 
     */
    public deleteTranslatorWithHttpInfo(translatorId: number, apiKey?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteTranslator(translatorId, apiKey, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTranslatorWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Deletes a translator
     * @param translatorId translator id to delete
     * @param apiKey 
     */
    public deleteTranslator(translatorId: number, apiKey?: string, _options?: Configuration): Observable<void> {
        return this.deleteTranslatorWithHttpInfo(translatorId, apiKey, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Find a translator that speaks a given language
     * Finds Translators by lang
     * @param lang Lang that need to be considered for filter
     */
    public findTranslatorsByLangWithHttpInfo(lang: string, _options?: Configuration): Observable<HttpInfo<Array<Translator>>> {
        const requestContextPromise = this.requestFactory.findTranslatorsByLang(lang, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.findTranslatorsByLangWithHttpInfo(rsp)));
            }));
    }

    /**
     * Find a translator that speaks a given language
     * Finds Translators by lang
     * @param lang Lang that need to be considered for filter
     */
    public findTranslatorsByLang(lang: string, _options?: Configuration): Observable<Array<Translator>> {
        return this.findTranslatorsByLangWithHttpInfo(lang, _options).pipe(map((apiResponse: HttpInfo<Array<Translator>>) => apiResponse.data));
    }

    /**
     * Returns a single translator
     * Find translator by ID
     * @param translatorId ID of translator to return
     */
    public getTranslatorByIdWithHttpInfo(translatorId: number, _options?: Configuration): Observable<HttpInfo<Translator>> {
        const requestContextPromise = this.requestFactory.getTranslatorById(translatorId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTranslatorByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a single translator
     * Find translator by ID
     * @param translatorId ID of translator to return
     */
    public getTranslatorById(translatorId: number, _options?: Configuration): Observable<Translator> {
        return this.getTranslatorByIdWithHttpInfo(translatorId, _options).pipe(map((apiResponse: HttpInfo<Translator>) => apiResponse.data));
    }

    /**
     * 
     * Update an existing translator
     * @param translator Translstor object
     */
    public updateTranslatorWithHttpInfo(translator: Translator, _options?: Configuration): Observable<HttpInfo<Translator>> {
        const requestContextPromise = this.requestFactory.updateTranslator(translator, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateTranslatorWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Update an existing translator
     * @param translator Translstor object
     */
    public updateTranslator(translator: Translator, _options?: Configuration): Observable<Translator> {
        return this.updateTranslatorWithHttpInfo(translator, _options).pipe(map((apiResponse: HttpInfo<Translator>) => apiResponse.data));
    }

    /**
     * 
     * Updates a translator in the store with form data
     * @param translatorId ID of translator that needs to be updated
     * @param name Updated name of the translator
     * @param lang Updated language of the translator
     */
    public updateTranslatorWithFormWithHttpInfo(translatorId: number, name?: string, lang?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateTranslatorWithForm(translatorId, name, lang, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateTranslatorWithFormWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Updates a translator in the store with form data
     * @param translatorId ID of translator that needs to be updated
     * @param name Updated name of the translator
     * @param lang Updated language of the translator
     */
    public updateTranslatorWithForm(translatorId: number, name?: string, lang?: string, _options?: Configuration): Observable<void> {
        return this.updateTranslatorWithFormWithHttpInfo(translatorId, name, lang, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}
