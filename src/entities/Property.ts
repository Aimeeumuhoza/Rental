import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity()
export class Property {
  @PrimaryGeneratedColumn('uuid')
  id: string | undefined;


  @Column({ type: "varchar"})
  title: string | undefined;

  @Column('text')
  description: string | undefined;

  @Column('decimal')
  pricePerNight: number | undefined;

  @Column('text')
  location: string | undefined;

  @ManyToOne(() => User, user => user.id)
  host: User | undefined;
}
