import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "src/graphql/models/user";

@ObjectType()
export class LoginResponse{
    @Field()
    access_token: string
    
    @Field(()=> User)
    user: User
}