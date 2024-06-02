import {
	Configuration,
	ConfigurationParameters,
	TranslatorApi
} from "./HttpClient";

import { ApiMiddleware } from "./middleware";

const configParams: ConfigurationParameters = {
	basePath: "https://localhost:3000",
	middleware: [new ApiMiddleware()]
};

const apiConfig = new Configuration(configParams);

export const apiClient = {
	translatorApi: new TranslatorApi(apiConfig)
};

export type ApiClient = typeof apiClient;

const res = apiClient.translatorApi.getTranslatorByIdRaw({ translatorId: 1 });

console.log(res);