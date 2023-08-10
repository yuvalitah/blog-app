import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 120 })
  public name: string;

  @Column({ type: 'varchar', length: 120 })
  public email: string;

  @Column({ type: 'varchar', length: 120 })
  public street: string;

  @Column({ type: 'varchar', length: 120 })
  public suite: string;

  @Column({ type: 'varchar', length: 120 })
  public city: string;

  @Column({ type: 'varchar', length: 120 })
  public zipcode: string;
}
