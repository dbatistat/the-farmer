import { Controller, Get, Inject } from '@nestjs/common';
import { FARMER_OUTPUT_SERVICE } from './constants';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { VideoService } from './video.service';
import { VideoResponseDto } from './dto/video-response.dto';

@Controller()
export class AppController {
  constructor(@Inject(FARMER_OUTPUT_SERVICE) private readonly rmqOutput: ClientProxy,
              private readonly videoService: VideoService) {
  }

  @Get()
  execute(): string {
    return 'Hello World!';
  }

  @MessagePattern({ cmd: 'getvideos' })
  async rmqGetDataById(id: number): Promise<VideoResponseDto> {
    return this.videoService.getDataById(id);
  }
}
