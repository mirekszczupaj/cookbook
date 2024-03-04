import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "src/graphql/models/user";
import { UserInput } from "src/graphql/utils/userInput";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>
    ) { }

    getUserById(id: number) {
        return this.usersRepository.findOneBy({ id });
    }

    findAll() {
        return this.usersRepository.find();
    }

    async findOne(login: string = null): Promise<User> {
        const condition = login ? {
            where: {
                login: login,
            },
        } : {};

        const user = await this.usersRepository.find(condition)

        return user[0];
    }

    createUser(createUserData: UserInput) {
        const newUser = this.usersRepository.create(createUserData);

        return this.usersRepository.save(newUser);
    }
}