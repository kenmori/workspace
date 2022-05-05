import { Body, Controller, Get, Post, Param, Put, Delete, Patch, ParseUUIDPipe } from '@nestjs/common';
import { Item} from '../entities/item.entity'
import { ItemStatus } from './item-status.enum';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/item-create-dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService){}
  @Get()
  findAll(){
    return this.itemsService.find()
  }
  @Get(":id")
  async findById(@Param('id', ParseUUIDPipe) id: string): Promise<Item>{
    return await this.itemsService.findById(id)
  }
  @Post()
  async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return await this.itemsService.create(createItemDto)
  }

  // @Patch(":id")
  // updateStatus(@Param("id", ParseUUIDPipe) id: string): Item {
  //   return this.itemsService.updateStatus(id)
  // }
  @Delete(":id")
  delete(@Param("id", ParseUUIDPipe) id: string): void{
    return this.itemsService.delete(id);
  }
}
