import { Controller, Get, Inject, Query } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  @Inject(UserService)
  private readonly service: UserService;

  @Get()
  public getUsers(
    @Query() query: { page: string; sort: 'asc' | 'desc' },
  ): Promise<{ users: User[]; totalUsers: number }> {
    return this.service.getUsers(query.page, query.sort);
  }
}
