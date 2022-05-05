import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateItemDto } from './dto/item-create-dto';
import { ItemStatus } from './item-status.enum';
import { ItemRepogitory } from './item.repository';
import { Item } from '../entities/item.entity';
import { DeleteResult, UpdateResult } from 'typeorm';

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
  async updateStatus(id: string): Promise<Item>{
    const item = await this.findById(id);
    const result = await this.itemRepository.save({...item, status: ItemStatus.SOLD_OUT, updatedAt: new Date().toISOString()})
    return result
  }
  async delete(id: string): Promise<void> {
    await this.itemRepository.delete({id})
  }
}
