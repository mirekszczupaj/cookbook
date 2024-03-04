import { Module } from "@nestjs/common";
import { UsersResolver } from "./usersResolver";
import { UsersService } from "./usersService";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/graphql/models/user";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UsersResolver, UsersService],
    exports: [UsersService]
})
export class UsersModule { }