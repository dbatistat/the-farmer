import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VideoEntity } from './entities/video.entity';
import { VideoResponseDto } from './dto/video-response.dto';

@Injectable()
export class VideoService {
  constructor(@InjectRepository(VideoEntity)
              private readonly videoRepository: Repository<VideoEntity>) {
  }

  async getDataById(clientid: number): Promise<VideoResponseDto> {
    try {
      const video = await this.videoRepository.findOne({ where: { clientId: clientid } });
      return {
        code: 200,
        data: video,
      };
    } catch (e) {
      return {
        code: 500,
        message: e.message,
      };
    }
  }
}
