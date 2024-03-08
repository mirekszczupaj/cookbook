import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExiration: false,
            secretOrKey: process.env.SECRET,
            logging: true
        })
    }
    
    async validate(payload: any){
        return {userId: payload.sub, username: payload.username}
    }
}