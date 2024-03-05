import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommentResolver } from "./commentResolver";
import { CommentService } from "./commentService";
import { Comment } from "src/graphql/models/comment";

@Module({
    imports: [TypeOrmModule.forFeature([Comment])],
    providers: [CommentResolver, CommentService],
})
export class CommentsModule { }