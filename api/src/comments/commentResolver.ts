import { Resolver, Query, Args, Int, ResolveField, Parent, Mutation } from "@nestjs/graphql";
import { Comment } from "src/graphql/models/comment";
import { CommentService } from "./commentService";
import { CommentInput } from "src/graphql/utils/commentInput";

@Resolver(of => Comment)
export class CommentResolver {
    constructor(private commentService: CommentService) { }

    @Query(returns => Comment, { nullable: true })
    getCommentById(@Args('id', { type: () => Int }) id: number) {
        return this.commentService.getCommentById(id);
    }

    @Query(() => [Comment])
    getComments(@Args('recipe', { type: () => Int, nullable: true }) recipeId: number) {
        return this.commentService.getComments(recipeId);
    }

    @Mutation(returns => Comment)
    createComment(@Args('createCommentData') createCommentData: CommentInput) {
        return this.commentService.createComment(createCommentData);
    }

    @Mutation(returns => Comment)
    updateComment(
        @Args('createCommentData') createCommentData: CommentInput,
        @Args('id', { type: () => Int }) id: number
    ) {
        return this.commentService.updateComment(id, createCommentData);
    }

    @Mutation(returns => Int)
    deleteComment(@Args('id', { type: () => Int }) id: number) {
        this.commentService.deleteComment(id);
        return id;
    }
}