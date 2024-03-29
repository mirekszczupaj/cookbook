import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UserInput {
    @Field()
    login: string;

    @Field()
    password: string;
}