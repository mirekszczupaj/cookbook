import { Module } from "@nestjs/common";
import { RecipeResolver } from "./recipeResolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Recipe } from "src/graphql/models/recipe";
import { RecipeService } from "./recipeService";

@Module({
    imports: [TypeOrmModule.forFeature([Recipe])],
    providers: [RecipeResolver, RecipeService],
})
export class RecipesModule { }