import { TranslatorApi, createConfiguration } from "..";
import { ApiMiddleware } from "./middleware";
  
const configuration = createConfiguration({
    middleware : [new ApiMiddleware()]
});

const apiClient = {
	translatorApi: new TranslatorApi(configuration)
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

