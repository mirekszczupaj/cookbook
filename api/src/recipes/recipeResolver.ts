import { Resolver, Query, Args, Int, Mutation } from "@nestjs/graphql";
import { RecipeService } from "./recipeService";
import { Recipe } from "src/graphql/models/recipe";
import { RecipeInput } from "src/graphql/utils/recipeInput";

@Resolver(of => Recipe)
export class RecipeResolver {
    constructor(private recipeService: RecipeService) { }

    @Query(returns => Recipe, { nullable: true })
    getRecipeById(@Args('id', { type: () => Int }) id: number) {
        return this.recipeService.getRecipeById(id);
    }

    @Query(() => [Recipe], { nullable: true })
    getRecipes(@Args('user', { type: () => Int, nullable: true }) userId: number) {
        return this.recipeService.getRecipes(userId);
    }

    @Mutation(returns => Recipe)
    createRecipe(@Args('createRecipeData') createRecipeData: RecipeInput) {
        return this.recipeService.createRecipe(createRecipeData);
    }

    @Mutation(returns => Recipe)
    updateRecipe(
        @Args('createRecipeData') createRecipeData: RecipeInput,
        @Args('id', { type: () => Int }) id: number
    ) {
        return this.recipeService.updateRecipe(id, createRecipeData);
    }

    @Mutation(returns => Int)
    deleteRecipe(@Args('id', { type: () => Int }) id: number) {
        this.recipeService.deleteRecipe(id);
        return id;
    }
}