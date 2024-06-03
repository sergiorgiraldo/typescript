import { TranslatorApi } from "../dist";
import {createConfiguration ,ConfigurationParameters} from "../dist/configuration";

const apiConfigParams: ConfigurationParameters = {
    authMethods : {"api_key": "special-key"}, 
};
  
const configuration = createConfiguration(apiConfigParams);

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

