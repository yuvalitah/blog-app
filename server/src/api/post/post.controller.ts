import {
  Controller,
  Get,
  Inject,
  Query,
  Delete,
  Param,
  Response,
  HttpStatus,
} from '@nestjs/common';
import { PostService } from './post.service';
import { Post } from './post.entity';

@Controller('posts')
export class PostController {
  @Inject(PostService)
  private readonly service: PostService;

  @Get()
  public async getPosts(
    @Query() query: { userId: string; page: string },
    @Response() res,
  ): Promise<{ posts: Post[]; totalPosts: number }> {
    const result = await this.service.getUserPosts(
      parseInt(query.userId),
      query.page,
    );
    return res.status(HttpStatus.OK).json(result);
  }

  @Delete(':postId')
  public async deletePost(
    @Param() params: { postId: string },
    @Response() res,
  ): Promise<void> {
    await this.service.deletePost(parseInt(params.postId));
    return res
      .status(HttpStatus.OK)
      .json('Post has been deleted successfully!');
  }
}
