import { createConfiguration, TranslatorApi } from "..";

const apiConfig = createConfiguration({ authMethods: undefined });

const apiClient = {
	translatorApi: new TranslatorApi(apiConfig)
};

apiClient.translatorApi
    .getTranslatorById(1)
    .then((res) => console.log("getTranslatorById", res));

apiClient.translatorApi
	.getTranslatorByIdWithHttpInfo(1)
	.then((info) => {
        console.log("getTranslatorByIdWithHttpInfo-code",info.httpStatusCode);
        console.log("getTranslatorByIdWithHttpInfo-data", info.data);
    });
