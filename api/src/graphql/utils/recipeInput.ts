import { Field, InputType, Int } from "@nestjs/graphql";
import { User } from "../models/user";

@InputType()
export class RecipeInput {
    @Field()
    title: string;

    @Field({ nullable: true })
    image?: string;

    @Field({ nullable: true })
    description?: string;

    @Field((type) => Int)
    user: User;
}