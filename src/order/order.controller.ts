import { Body, Controller, Get, Param, Post, Put, Req } from '@nestjs/common';
import { OrderService } from './order.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from './dtos/create-order.dto';
import { UpdateOrderDto, UpdateOrderParamDto } from './dtos/update-order.dto';


@ApiTags('Orders')
@Controller('/api/v1/order')
export class OrderController {
  constructor(private readonly orderSvc: OrderService) { }

  @Post()
  createOrder(@Req() req, @Body() data: CreateOrderDto) {
    const requestId = req.headers['requestId'];
    return this.orderSvc.createOrder(data, requestId);
  }

  @Put('/:orderId')
  updateOrder(@Req() req, @Body() data: UpdateOrderDto, @Param() orderId: UpdateOrderParamDto) {
    const requestId = req.headers['requestId'];
    return this.orderSvc.updateOrder({ ...data, id: orderId }, requestId);
  }

  @Get()
  getOrders(@Req() req) {
    const requestId = req.headers['requestId'];
    return this.orderSvc.getOrders(requestId);
  }
}
