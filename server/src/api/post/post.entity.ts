import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryColumn()
  public id!: number;

  @PrimaryColumn()
  public userId: number;

  @Column({ type: 'varchar', length: 250 })
  public title: string;

  @Column({ type: 'varchar', length: 500 })
  public body: string;
}
