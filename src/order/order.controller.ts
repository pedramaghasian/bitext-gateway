import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderService } from './order.service';


@Controller('/api/v1/order')
export class OrderController {
  constructor(private readonly orderSvc: OrderService) {}

  @Post()
  createOrder(@Body() data) {
    return this.orderSvc.createOrder(data);
  }
}
