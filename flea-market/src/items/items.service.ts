import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateItemDto } from './dto/item-create-dto';
import { ItemStatus } from './item-status.enum';
import { ItemRepogitory } from './item.repository';
import { Item } from '../entities/item.entity';

@Injectable()
export class ItemsService {
  constructor(private readonly itemRepository: ItemRepogitory  ){}
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
  async create(createItemDto: CreateItemDto): Promise<Item> {
    return await this.itemRepository.createItem(createItemDto)
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
