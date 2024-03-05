import { Field, ObjectType, Int } from "@nestjs/graphql";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

@Entity({ name: 'recipe' })
@ObjectType()
export class Recipe {
    @PrimaryGeneratedColumn()
    @Field((type) => Int)
    id: number

    @Column()
    @Field()
    title: string;

    @Column({ nullable: true })
    @Field({ nullable: true })
    image?: string;

    @Column({ nullable: true })
    @Field({ nullable: true })
    description?: string;

    @ManyToOne(() => User)
    @Field((type) => Int)
    user: User;
}