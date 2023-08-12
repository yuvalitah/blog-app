import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  @InjectRepository(Post)
  private readonly repository: Repository<Post>;

  private fetchUserPosts = async (userId: number): Promise<Post[]> => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    );

    const posts: Post[] = await response.json();
    return posts;
  };

  public async getUserPosts(
    userId: number,
    page: string,
  ): Promise<{ posts: Post[]; totalPosts: number }> {
    const userPosts = await this.repository.find({ where: { userId } });
    if (userPosts.length === 0) {
      const posts: Post[] = await this.fetchUserPosts(userId);
      const postsEntities = this.repository.create(posts);
      await this.repository.insert(postsEntities);
    }

    const currPage: number = parseInt(page) || 1;
    const [posts, totalPosts] = await this.repository.findAndCount({
      where: {
        userId,
      },
      take: 1,
      skip: (currPage - 1) * 1,
    });

    return { posts, totalPosts };
  }

  public async deletePost(postId: number): Promise<void> {
    await this.repository.delete({ id: postId });
  }
}
