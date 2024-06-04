import { RequestContext, ResponseContext } from "../http/http";
import { Middleware } from "../middleware";
import { Observable, from } from "../rxjsStub";

import {sign} from "jsonwebtoken";

export class ApiMiddleware implements Middleware {
    ApiMiddleware() {
        console.log("ApiMiddleware created");    
    }

	public pre(context: RequestContext): Observable<RequestContext> {
        const payload = {
            id: "sergio"
        };
        const secretKey = "special_key";
        const accessToken = sign(payload, secretKey, { expiresIn: "1h" });

		let newContext = new RequestContext(
			context.getUrl(),
			context.getHttpMethod()
		);
		newContext.setHeaderParam("Authorization", `Bearer ${accessToken}`);
		return from(new Promise<RequestContext>((resolve) => resolve(newContext)));
	}

	public post(context: ResponseContext): Observable<ResponseContext> {
		return from(
			new Promise<ResponseContext>((resolve) => resolve(context))
		);
	}
}


