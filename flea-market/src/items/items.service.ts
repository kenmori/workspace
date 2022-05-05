import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateItemDto } from './dto/item-create-dto';
import { ItemStatus } from './item-status.enum';
import { Item } from './items.model';

@Injectable()
export class ItemsService {
  private items: Item[] = [];
  findAll(): Item[]{
    return this.items
  }
  findById(id: string): Item {
    const find = this.items.find((item) => item.id === id)
    if(!find){
      throw new NotFoundException()
    }
    return find
  }
  create(createItemDto: CreateItemDto): Item {
    const item = {
      id: uuid(),
      ...createItemDto,
      status: ItemStatus.ON_SALE
    }
    this.items.push(item)
    return item
  }
  updateStatus(id: string): Item{
    const item = this.findById(id);
    item.status = ItemStatus.SOLD_OUT
    return item
  }
  delete(id: string): void{
    this.items = this.items.filter((item) => item.id !== id)
  }
}
