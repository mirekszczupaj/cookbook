import { Field, InputType, Int } from "@nestjs/graphql";
import { Recipe } from "../models/recipe";
import { User } from "../models/user";

@InputType()
export class CommentInput {
    @Field()
    description: string;

    @Field({ nullable: true })
    dateTime: Date;

    @Field((type) => Int)
    recipe: Recipe;

    @Field((type) => Int)
    user: User;
}