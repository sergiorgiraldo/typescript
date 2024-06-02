import { Translator } from "../models/Translator";
import { TranslatorApiRequestFactory } from "../apis/TranslatorApi";
import { createConfiguration } from "../configuration";
import { IsomorphicFetchHttpLibrary } from "../http/isomorphic-fetch";
import { ResponseContext, HttpInfo } from "../http/http";
import { Observable } from '../rxjsStub';

const config = createConfiguration({ authMethods: undefined });

const requestFactory = new TranslatorApiRequestFactory(config);

const fetchLibrary = new IsomorphicFetchHttpLibrary();

const translator = new Translator();
translator.name = "Jayleen Doe";
translator.lang = "portuguese";
const requestContext1 = requestFactory.addTranslator(translator);


requestContext1
	.then((context) => {
		fetchLibrary.send(context);
	})
	.catch((error) => {
		console.log(error);
	});

const lang = "portuguese";
const requestContext2 = requestFactory.findTranslatorsByLang(lang);

requestContext2
	.then((context) => {
		const observableResponse: Observable<HttpInfo<Translator>> = fetchLibrary.send(context);
        
		observableResponse.pipe((responseContext: ResponseContext) => {
            responseContext.body.text().then((text) => {
                console.log(text);
            })
		});
	})
	.catch((error) => {
		console.log(error);
	});    