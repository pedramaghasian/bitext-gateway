import { ApiProperty } from '@nestjs/swagger';
import {
    IsString, IsNotEmpty,
} from 'class-validator';

export class CreateOrderDto {

    @ApiProperty({ required: false })
    @IsString()
    id?: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

}