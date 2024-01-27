import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { OrderService } from './order.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from './dtos/create-order.dto';


@ApiTags('Orders')
@Controller('/api/v1/order')
export class OrderController {
  constructor(private readonly orderSvc: OrderService) { }

  @Post()
  createOrder(@Req() req, @Body() data: CreateOrderDto) {
    const requestId = req.headers['requestId'];
    return this.orderSvc.createOrder(data, requestId);
  }
}
