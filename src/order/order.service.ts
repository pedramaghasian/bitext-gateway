import { Injectable } from '@nestjs/common';
import { Inject, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class OrderService implements OnModuleInit, OnModuleDestroy {
  constructor(
    @Inject('KAFKA') private readonly client: ClientKafka,
  ) { }

  async onModuleInit() {
    ['commands.createOrder','queryies.getOrders','commands.updateOrder'].forEach((key) => this.client.subscribeToResponseOf(`${key}`));
    await this.client.connect();
  }

  async onModuleDestroy() {
    await this.client.close();
  }

  async createOrder(data, requestId) {
    const topic = 'commands.createOrder'
    const payload = {
      data,
      headers: {
        correlationId: requestId,
      },
    };
    return this.client.send(
      topic,
      JSON.stringify(payload),
    );
  }

  async updateOrder(data, requestId) {
    const topic = 'commands.updateOrder'
    const payload = {
      data,
      headers: {
        correlationId: requestId,
      },
    };
    return this.client.send(
      topic,
      JSON.stringify(payload),
    );
  }

  async getOrders(requestId) {
    const topic = 'queryies.getOrders'
    const payload = {
      headers: {
        correlationId: requestId,
      },
    };
    return this.client.send(
      topic,
      JSON.stringify(payload),
    );
  }

}
