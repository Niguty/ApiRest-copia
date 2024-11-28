import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "../entities/user.entity";
import { Model } from "mongoose";
import { CreateUserDto } from "../dto/create-user.dto";

@Injectable()
export class userRepository {
    constructor(@InjectModel('users') private readonly userModel: Model<User>) {}
        
        async getUser(): Promise<User[]>{
            return this.userModel.find().exec();
        }

        async getUserById(idUsers: string): Promise<User>{
            return this.userModel.findById(idUsers).exec();
        }

        async saveUser(newUser: CreateUserDto): Promise<User> {
            const newUserEntity = new this.userModel(newUser)
            return await newUserEntity.save();
        }

        async deleteUser(idUsers: string): Promise<string>{
            const user = await this.userModel.findByIdAndDelete(idUsers);
            return `Carta com o id ${user.id} foi deletada`;
        }
}