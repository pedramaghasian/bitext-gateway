import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { OrderModule } from './order/order.module';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'EVENTS',
          type: 'topic',
        },
        {
          name: 'COMMANDS',
          type: 'direct',
        },
        {
          name: 'QUERIES',
          type: 'direct',
        },
      ],
      uri: 'amqp://rabbitmq:rabbitmq@localhost:5672',
      connectionInitOptions: { wait: false },
    }),  
    // OrderModule,
  ],
  controllers: [AppController,OrderController],
  providers: [AppService,OrderService],
  exports: [RabbitMQModule]
})
export class AppModule {}
