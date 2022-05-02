import { Body, Controller, Get, Post, Param, Put, Delete, Patch } from '@nestjs/common';
import { Item} from './items.model'
import { ItemStatus } from './item-status.enum';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService){}
  @Get()
  findAll(){
    return this.itemsService.findAll()
  }
  @Get(":id")
  findById(@Param('id') id: string){
    return this.itemsService.findById(id)
  }
  @Post()
  create(
    @Body("id")id: string,
    @Body("name")name: string,
    @Body("price") price: number,
    @Body("description") description: string
  ): Item {
    const item: Item = {
      id,
      name,
      price,
      description,
      status: ItemStatus.ON_SALE
    }
    return this.itemsService.create(item)
  }

  @Patch(":id")
  updateStatus(@Param("id") id: string): Item {
    return this.itemsService.updateStatus(id)
  }
  @Delete(":id")
  delete(@Param("id") id: string): void{
    return this.itemsService.delete(id);
  }
}
