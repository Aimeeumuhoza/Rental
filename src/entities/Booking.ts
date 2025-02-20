import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from './User';
import { Property } from './Property';

export enum BookingStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  CANCELED = 'CANCELED'
}

@Entity()
export class Booking {
  @PrimaryGeneratedColumn('uuid')
  id: string | undefined;

  @ManyToOne(() => User, user => user.bookings)
  renter: User | undefined;

  @ManyToOne(() => Property, property => property.id)
  property: Property | undefined;

  @Column('date')
  checkInDate: Date | undefined;

  @Column('date')
  checkOutDate: Date | undefined;

  @Column({
    type: 'enum',
    enum: BookingStatus,
    default: BookingStatus.PENDING
  })
  status: BookingStatus | undefined;

  @CreateDateColumn()
  createdAt: Date | undefined;
}
