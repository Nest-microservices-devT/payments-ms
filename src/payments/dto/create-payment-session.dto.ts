import {
  ArrayMinSize,
  IsArray,
  IsString,
  ValidateNested,
} from 'class-validator';
import { PaymentSessionItemsDto } from './payment-session-items.dto';
import { Type } from 'class-transformer';

export class CreatePaymentSessionDto {
  @IsString()
  orderId: string;

  @IsString()
  currency: string;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => PaymentSessionItemsDto)
  items: PaymentSessionItemsDto[];
}
