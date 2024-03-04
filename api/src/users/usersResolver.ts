import { Resolver, Query, Args, Int, Mutation } from "@nestjs/graphql";
import { User } from '../graphql/models/user';
import { UserInput } from "../graphql/utils/userInput";
import { UsersService } from "./usersService";

@Resolver(of => User)
export class UsersResolver {
    constructor(private userService: UsersService) { }

    @Query(returns => User, { nullable: true })
    getUserById(@Args('id', { type: () => Int }) id: number) {
        return this.userService.getUserById(id);
    }

    @Query(() => [User], { name: 'users' })
    findAll() {
        return this.userService.findAll();
    }

    @Query(() => User, { name: 'user' })
    findOne(@Args('login') login: string) {
        return this.userService.findOne(login);
    }

    @Mutation(returns => User)
    createUser(@Args('createUserData') createUserData: UserInput) {
        return this.userService.createUser(createUserData);
    }
}