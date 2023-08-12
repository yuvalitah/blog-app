import {
  Controller,
  Get,
  HttpStatus,
  Inject,
  Query,
  Response,
} from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  @Inject(UserService)
  private readonly service: UserService;

  @Get()
  public async getUsers(
    @Query() query: { page: string; sortByName: 'ASC' | 'DESC' },
    @Response() res,
  ): Promise<{ users: User[]; totalUsers: number }> {
    const result = await this.service.getUsers(query.page, query.sortByName);
    return res.status(HttpStatus.OK).json(result);
  }
}
