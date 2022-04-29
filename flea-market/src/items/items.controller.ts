import { Body, Controller, Get, Post, Param, Put, Delete, Patch, ParseUUIDPipe } from '@nestjs/common';
import { Item} from './items.model'
import { ItemStatus } from './item-status.enum';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/item-create-dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService){}
  @Get()
  findAll(){
    return this.itemsService.findAll()
  }
  @Get(":id")
  findById(@Param('id', ParseUUIDPipe) id: string){
    return this.itemsService.findById(id)
  }
  @Post()
  create(@Body() createItemDto: CreateItemDto): Item {
    return this.itemsService.create(createItemDto)
  }

  @Patch(":id")
  updateStatus(@Param("id", ParseUUIDPipe) id: string): Item {
    return this.itemsService.updateStatus(id)
  }
  @Delete(":id")
  delete(@Param("id", ParseUUIDPipe) id: string): void{
    return this.itemsService.delete(id);
  }
}
