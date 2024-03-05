import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Recipe } from "src/graphql/models/recipe";
import { RecipeInput } from "src/graphql/utils/recipeInput";

@Injectable()
export class RecipeService {
    constructor(
        @InjectRepository(Recipe) private recipesRepository: Repository<Recipe>
    ) { }

    async getRecipes(userId: number = null) {
        const condition = userId ? {
            where: {
                user: {id: userId},
            },
        } : {};

        return await this.recipesRepository.find(condition);
    }

    getRecipeById(id: number) {
        return this.recipesRepository.findOneBy({ id });
    }

    createRecipe(createRecipeData: RecipeInput) {
        const newRecipe = this.recipesRepository.create(createRecipeData);

        return this.recipesRepository.save(newRecipe);
    }

    updateRecipe(id: number, updateRecipeData: RecipeInput) {
        this.recipesRepository.update(id, updateRecipeData);

        return updateRecipeData;
    }

    deleteRecipe(id: number) {
        this.recipesRepository.delete(id);

        return id;
    }
}