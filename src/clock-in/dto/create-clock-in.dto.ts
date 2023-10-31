
import { IsInt, IsNumber, IsNotEmpty, IsLatitude, IsLongitude } from 'class-validator';

export class ClockInDto {
  @IsInt()
  @IsNotEmpty()
  workerId: number;

  @IsNotEmpty()
  timestamp: number;

  @IsNumber()
  @IsLatitude()
  @IsNotEmpty()
  latitude: number;

  @IsNumber()
  @IsLongitude()
  @IsNotEmpty()
  longitude: number;
}
