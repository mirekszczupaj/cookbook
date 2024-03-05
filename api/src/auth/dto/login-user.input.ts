import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class LoginUserInput {
    @Field()
    login: string
    
    @Field()
    password: string
}