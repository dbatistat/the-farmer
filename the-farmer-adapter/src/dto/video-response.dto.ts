import { VideoEntity } from '../entities/video.entity';

export interface VideoResponseDto {
  code: number;
  data?: VideoEntity;
  message?: string;
}
