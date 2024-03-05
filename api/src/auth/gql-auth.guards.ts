import { ExecutionContext, Injectable } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class GqlAuthGuard extends AuthGuard('local') {
    constructor() {
        super()
    }

    getRequest(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context)
        const request = ctx.getContext()
        const userData = ctx.getArgs().loginUserInput
        request.body = {username: userData.login, password: userData.password}
        // TODO: check username field name and login
        return request
    }
}