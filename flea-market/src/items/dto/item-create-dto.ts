import { IsString, MaxLength, IsNotEmpty, IsInt, Min } from "class-validator"
import { Type } from "class-transformer"
import { isInt16Array } from "util/types"
import { ItemStatus } from "../item-status.enum"

export class CreateItemDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(40)
  name: string

  @IsInt()
  @Min(1)
  @Type(() => Number) //リクエストが文字列で渡ってくることがあるのでプロパティをNumber型として認識する様にする
  price: number

  @IsString()
  @IsNotEmpty()
  description: string
  status: ItemStatus
}