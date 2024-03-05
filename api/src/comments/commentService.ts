import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Comment } from "src/graphql/models/comment";
import { CommentInput } from "src/graphql/utils/commentInput";

@Injectable()
export class CommentService {
    constructor(
        @InjectRepository(Comment) private commentsRepository: Repository<Comment>
    ) { }

    getComments(recipeId: number = null) {
        console.log(recipeId)
        const condition = recipeId !== null ? {
            where: {
                recipe: {id: recipeId},
            },
        } : {};

        return this.commentsRepository.find(condition);
    }

    getCommentById(id: number) {
        return this.commentsRepository.findOneBy({ id });
    }

    createComment(createCommentData: CommentInput) {
        const newComment = this.commentsRepository.create(createCommentData);

        return this.commentsRepository.save(newComment);
    }

    updateComment(id: number, updateCommentData: CommentInput) {
        this.commentsRepository.update(id, updateCommentData);

        return updateCommentData;
    }

    deleteComment(id: number) {
        this.commentsRepository.delete(id);

        return id;
    }
}