import { Item } from "src/entities/item.entity";
import { EntityRepository, Repository } from "typeorm";
import { CreateItemDto } from "./dto/item-create-dto";
import { ItemStatus } from "./item-status.enum";

@EntityRepository(Item)
export class ItemRepogitory extends Repository<Item> {
  async createItem(createItemDto: CreateItemDto): Promise<Item>{
    const { name, price, description } = createItemDto;
    const item = this.create({
      name,
      price,
      description,
      status: ItemStatus.ON_SALE,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    })
    await this.save(item);
    return item;
  }
  async findAll(): Promise<Item[]> {
    const items = await this.findAll()
    return items
  }
}