import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { OrderService } from './order.service';


@Controller('/api/v1/order')
export class OrderController {
  constructor(private readonly orderSvc: OrderService) {}

  @Post()
  createOrder(@Req() req, @Body() data) {
    const requestId = req.headers['requestId'];
    return this.orderSvc.createOrder(data, requestId);
  }
}
