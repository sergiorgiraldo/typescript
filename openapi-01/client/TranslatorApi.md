# .TranslatorApi

All URIs are relative to *http://translator-srg.swagger.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTranslator**](TranslatorApi.md#addTranslator) | **POST** /translator | Add a new translator
[**deleteTranslator**](TranslatorApi.md#deleteTranslator) | **DELETE** /translator/{translatorId} | Deletes a translator
[**findTranslatorsByLang**](TranslatorApi.md#findTranslatorsByLang) | **GET** /translator/findByLang | Finds Translators by lang
[**getTranslatorById**](TranslatorApi.md#getTranslatorById) | **GET** /translator/{translatorId} | Find translator by ID
[**updateTranslator**](TranslatorApi.md#updateTranslator) | **PUT** /translator | Update an existing translator
[**updateTranslatorWithForm**](TranslatorApi.md#updateTranslatorWithForm) | **POST** /translator/{translatorId} | Updates a translator in the store with form data


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
> deleteTranslator()



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

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
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

# **updateTranslator**
> Translator updateTranslator(translator)



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TranslatorApi(configuration);

let body:.TranslatorApiUpdateTranslatorRequest = {
  // Translator | Translstor object
  translator: {
    id: 1,
    name: "doggie",
    lang: "doggie",
  },
};

apiInstance.updateTranslator(body).then((data:any) => {
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

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Invalid ID supplied |  -  |
**404** | Translator not found |  -  |
**405** | Validation exception |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateTranslatorWithForm**
> updateTranslatorWithForm()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TranslatorApi(configuration);

let body:.TranslatorApiUpdateTranslatorWithFormRequest = {
  // number | ID of translator that needs to be updated
  translatorId: 1,
  // string | Updated name of the translator (optional)
  name: "name_example",
  // string | Updated language of the translator (optional)
  lang: "lang_example",
};

apiInstance.updateTranslatorWithForm(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **translatorId** | [**number**] | ID of translator that needs to be updated | defaults to undefined
 **name** | [**string**] | Updated name of the translator | (optional) defaults to undefined
 **lang** | [**string**] | Updated language of the translator | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**405** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


