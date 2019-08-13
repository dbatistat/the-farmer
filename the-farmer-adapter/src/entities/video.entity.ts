import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'video_data' })
export class VideoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'client_id', nullable: false })
  clientId: number;

  @Column({ length: 20, nullable: false })
  dataOne: string;

  @Column({ length: 20, nullable: true })
  dataTwo: string;

  @Column({ length: 20, nullable: true })
  dataThree: string;
}
