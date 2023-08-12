import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

interface ApiUser {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

@Injectable()
export class UserService {
  @InjectRepository(User)
  private readonly repository: Repository<User>;

  private formatUser(user: ApiUser): User {
    const newUser = new User();
    newUser.id = user.id;
    newUser.email = user.email;
    newUser.name = user.name;
    newUser.city = user.address.city;
    newUser.street = user.address.street;
    newUser.suite = user.address.suite;
    newUser.zipcode = user.address.zipcode;
    return newUser;
  }

  private async insertUsers(users: User[]): Promise<void> {
    const existingUsers = await this.repository.find();
    const newUsers = users.filter(
      (user) =>
        !existingUsers.map((existingUser) => existingUser.id).includes(user.id),
    );

    const newUsersEntites = this.repository.create(newUsers);
    await this.repository.insert(newUsersEntites);
  }

  public async getUsers(
    page: string,
    sort: 'ASC' | 'DESC',
  ): Promise<{ users: User[]; totalUsers: number }> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: ApiUser[] = await response.json();

    const newUsers = users.map((user) => this.formatUser(user));
    this.insertUsers(newUsers);

    const currPage: number = parseInt(page) || 1;
    const [result, totalUsers] = await this.repository.findAndCount({
      order: sort === 'ASC' || sort === 'DESC' ? { name: sort } : { id: 'ASC' },
      take: 4,
      skip: (currPage - 1) * 4,
    });

    return { users: result, totalUsers };
  }
}
