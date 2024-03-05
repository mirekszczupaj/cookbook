import { Field, ObjectType, Int, GraphQLISODateTime } from "@nestjs/graphql";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";
import { Recipe } from "./recipe";

@Entity({ name: 'comment' })
@ObjectType()
export class Comment {
    @PrimaryGeneratedColumn()
    @Field((type) => Int)
    id: number

    @Column()
    @Field()
    description: string;

    @Column({ type: 'datetime', nullable: true })
    @Field((type) => GraphQLISODateTime, { nullable: true })
    dateTime: Date;

    @ManyToOne(() => Recipe, {
        onDelete: "CASCADE"
    })
    @Field((type) => Int)
    recipe: Recipe;

    @ManyToOne(() => User)
    @Field((type) => Int)
    user: User;
}