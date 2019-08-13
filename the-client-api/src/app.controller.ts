import { Controller, Get, HttpStatus, Inject, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { FARMER_INPUT_SERVICE } from './constants';
import { VideoResponseDto } from './dto/video-response.dto';

@Controller()
export class AppController {
  constructor(@Inject(FARMER_INPUT_SERVICE) private readonly rmqInput: ClientProxy,
              private readonly appService: AppService) {
  }

  @Get(':clientId')
  execute(@Param('clientId') clientId: number, @Res() response) {
    const pattern = { cmd: 'getvideos' };
    this.rmqInput.send<number>(pattern, clientId).toPromise().then(data => {
      response.status(HttpStatus.OK).json(data);
    }).catch(error => {
      response.status(HttpStatus.CONFLICT).json(error);
    });
  }

  @MessagePattern({ cmd: 'result' })
  sum(data: number[]): number {
    return  1;
  }
}
