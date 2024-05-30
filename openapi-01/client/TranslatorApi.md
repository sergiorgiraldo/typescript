# .TranslatorApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTranslator**](TranslatorApi.md#addTranslator) | **POST** /translator | Add a new translator
[**deleteTranslator**](TranslatorApi.md#deleteTranslator) | **DELETE** /translator/{translatorId} | Deletes a translator
[**findTranslatorsByLang**](TranslatorApi.md#findTranslatorsByLang) | **GET** /translator/findByLang | Finds Translators by lang
[**getTranslatorById**](TranslatorApi.md#getTranslatorById) | **GET** /translator/{translatorId} | Find translator by ID


# **addTranslator**
> Translator addTranslator(translator)



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TranslatorApi(configuration);

let body:.TranslatorApiAddTranslatorRequest = {
  // Translator | Translstor object
  translator: {
    id: 1,
    name: "doggie",
    lang: "doggie",
  },
};

apiInstance.addTranslator(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **translator** | **Translator**| Translstor object |


### Return type

**Translator**

### Authorization

[translatorstore_auth](README.md#translatorstore_auth)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**405** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteTranslator**
> void deleteTranslator()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TranslatorApi(configuration);

let body:.TranslatorApiDeleteTranslatorRequest = {
  // number | translator id to delete
  translatorId: 1,
  // string (optional)
  apiKey: "api_key_example",
};

apiInstance.deleteTranslator(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **translatorId** | [**number**] | translator id to delete | defaults to undefined
 **apiKey** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Translator deleted |  -  |
**400** | Invalid translator value |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **findTranslatorsByLang**
> Array<Translator> findTranslatorsByLang()

Find a translator that speaks a given language

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TranslatorApi(configuration);

let body:.TranslatorApiFindTranslatorsByLangRequest = {
  // string | Lang that need to be considered for filter
  lang: "lang_example",
};

apiInstance.findTranslatorsByLang(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lang** | [**string**] | Lang that need to be considered for filter | defaults to undefined


### Return type

**Array<Translator>**

### Authorization

[translatorstore_auth](README.md#translatorstore_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Invalid status value |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTranslatorById**
> Translator getTranslatorById()

Returns a single translator

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TranslatorApi(configuration);

let body:.TranslatorApiGetTranslatorByIdRequest = {
  // number | ID of translator to return
  translatorId: 1,
};

apiInstance.getTranslatorById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **translatorId** | [**number**] | ID of translator to return | defaults to undefined


### Return type

**Translator**

### Authorization

[api_key](README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Invalid ID supplied |  -  |
**404** | Translator not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


