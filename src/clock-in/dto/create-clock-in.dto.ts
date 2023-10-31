
import { IsInt, IsNumber, IsNotEmpty, IsLatitude, IsLongitude } from 'class-validator';

export class CreateClockInDto {
  @IsInt()
  @IsNotEmpty()
  workerId: number;

  @IsNumber()
  @IsLatitude()
  @IsNotEmpty()
  latitude: number;

  @IsNumber()
  @IsLongitude()
  @IsNotEmpty()
  longitude: number;
}
