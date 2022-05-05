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
  async findById(id: string): Promise<Item> {
    const find = this.itemRepository.findOne(id)
    if(!find){
      throw new NotFoundException()
    }
    return find
  }
  async create(createItemDto: CreateItemDto): Promise<Item> {
    return await this.itemRepository.createItem(createItemDto)
  }
  async find(): Promise<Item[]> {
    return await this.itemRepository.find()
  }
  // updateStatus(id: string): Item{
  //   const item = this.findById(id);
  //   item.status = ItemStatus.SOLD_OUT
  //   return item
  // }
  delete(id: string): void{
    this.items = this.items.filter((item) => item.id !== id)
  }
}
