import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/usersService';
import { User } from 'src/graphql/models/user';
import { JwtService } from '@nestjs/jwt';
import { LoginUserInput } from './dto/login-user.input';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService){}
    
    async validateUser(login: string, password: string): Promise<any>{
        const user = await this.userService.findOne(login)

        const valid = await bcrypt.compare(password, user?.password)

        if(user && valid){ 
            const {password, ...result} = user
            return result
        }

        return null
    }

    async login(user: User){
        const accessToken = this.jwtService.sign({username: user.login, sub: user.id})

        return {
            access_token: accessToken,
            user
        }
    }

    async signup(loginUserInput: LoginUserInput){
        const user = await this.userService.findOne(loginUserInput.login)

        if(user){
            throw new Error('User already exists!')
        }

        const password = await bcrypt.hash(loginUserInput.password, 10)

        return this.userService.createUser({
            ...loginUserInput,
            password
        })
    }
}
