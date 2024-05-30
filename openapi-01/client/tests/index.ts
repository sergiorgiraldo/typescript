import { Translator } from "../models/Translator";
import { TranslatorApiRequestFactory } from "../apis/TranslatorApi";
import { createConfiguration } from "../configuration";
import { IsomorphicFetchHttpLibrary } from "../http/isomorphic-fetch";

const translator = new Translator();
translator.name = "Jayleen Doe";
translator.lang = "portuguese";

const config = createConfiguration({ authMethods: undefined });

const requestFactory = new TranslatorApiRequestFactory(config);

const requestContext = requestFactory.addTranslator(translator);

requestContext
	.then((context) => {
		const fetchLibrary = new IsomorphicFetchHttpLibrary();
		fetchLibrary.send(context);
	})
	.catch((error) => {
		console.log(error);
	});
