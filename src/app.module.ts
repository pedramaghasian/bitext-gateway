import { MiddlewareConsumer, Module, NestModule, OnApplicationShutdown } from '@nestjs/common';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';
import { RequestIdMiddleware } from './middleware/set-request-id.middleware';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'kafka_client_id',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'kafka_group_id',
          },
        },
      },
    ]),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestIdMiddleware).forRoutes('*');
  }
}