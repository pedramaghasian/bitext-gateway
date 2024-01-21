import { Injectable } from '@nestjs/common';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { BaseService } from 'src/base.service';

@Injectable()
export class OrderService extends BaseService {
    constructor(protected readonly amqpConnection: AmqpConnection) {
      super('Orders', amqpConnection);
    }
  

  async createOrder(data) {
    return this.sendCommand('create_order', data, {}, true);
  }
}
