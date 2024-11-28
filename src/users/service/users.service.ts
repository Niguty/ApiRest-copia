import { Injectable, UseGuards } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/entities/user.entity';


@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
        
        async create(CreateUserDto: CreateUserDto): Promise<User> {
            const createdUser = new this.userModel(CreateUserDto);
            return createdUser.save();
        }

        async findAll(): Promise<User[]> {
            return this.userModel.find().exec();
        }

        async findById(idUser: string): Promise<User> {
            return this.userModel.findById(idUser).exec();
        }

        async update(idUser: string, updatedUserDto: Partial<CreateUserDto>): Promise<User> {
            const updatedUser = await this.userModel.findByIdAndUpdate(idUser,updatedUserDto,
            { new: true, userFindAndModify: false }).exec();
            return updatedUser;
        }

        async deleteById(idUser: string): Promise<User> {
            const deletedUser = this.userModel.findByIdAndDelete(idUser).exec();
            return deletedUser;
        }

}
