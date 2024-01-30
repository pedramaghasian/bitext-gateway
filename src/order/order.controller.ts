import { Body, Controller, Get, Param, Post, Put, Req } from '@nestjs/common';
import { OrderService } from './order.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from './dtos/create-order.dto';
import { UpdateOrderDto, UpdateOrderParamDto } from './dtos/update-order.dto';

@Controller('/api/v1/order')
@ApiTags('Orders')
export class OrderController {
  constructor(private readonly orderSvc: OrderService) {}

  @Post()
  createOrder(@Req() req: any, @Body() data: CreateOrderDto) {
    const requestId = req.headers['requestId'];

    return this.orderSvc.createOrder(data, requestId);
  }

  @Put('/:orderId')
  updateOrder(
    @Req() req: any,
    @Body() data: UpdateOrderDto,
    @Param() param: UpdateOrderParamDto,
  ) {
    const requestId = req.headers['requestId'];
    const { orderId } = param;

    return this.orderSvc.updateOrder(
      { ...data, id: orderId.toString() },
      requestId,
    );
  }

  @Get()
  getOrders(@Req() req: any) {
    const requestId = req.headers['requestId'];
    return this.orderSvc.getOrders(requestId);
  }
}
