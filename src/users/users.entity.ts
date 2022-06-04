import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 120 })
  name: string;
  @Column({ unique: true, length: 100, nullable: false })
  email: string;
  @Column({ nullable: false })
  password: string;
  @Column({ unique: true, nullable: false })
  login: string;
}
