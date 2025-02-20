import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from './User';
import { Booking } from './Booking';

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

  @OneToMany(() => Booking, booking => booking.property)
  bookings: Booking[] | undefined;

  @Column('boolean')
  isAvailable: boolean | undefined;

  @Column('date')
  createdAt: Date | undefined;

  @Column('date')
  updatedAt: Date | undefined;
}
