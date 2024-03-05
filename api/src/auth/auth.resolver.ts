import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginResponse } from './dto/login-response';
import { LoginUserInput } from './dto/login-user.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './gql-auth.guards';
import { User } from 'src/graphql/models/user';

@Resolver()
export class AuthResolver {
    constructor(private authService: AuthService){}

    @Mutation(() => LoginResponse)
    @UseGuards(GqlAuthGuard)
    async login(@Args('loginUserInput') LoginUserInput: LoginUserInput, @Context() context){
        const result = await this.authService.login(context.user)

        // TODO:Save token like a cookie with httpOnly. Dosen't works on other domain. How use this token on front ?
        // const expires = new Date(Date.now() + 150 * 24 * 60 * 60 * 1000)
        // context.res.cookie("access_token2", result.access_token, { httpOnly: true, sameSite: 'none', path: '/', secure: true, domain: 'localhost', expires })

        return result
    }

    @Mutation(() => User)
    signup(@Args('loginUserInput') LoginUserInput: LoginUserInput){
        return this.authService.signup(LoginUserInput)
    }
}
