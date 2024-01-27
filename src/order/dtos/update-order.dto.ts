import { ApiProperty } from '@nestjs/swagger';
import {
    IsString, IsNotEmpty,
} from 'class-validator';

export class UpdateOrderDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;
}

export class UpdateOrderParamDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    orderId: string;
}