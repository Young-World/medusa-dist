import { FindManyOptions, Repository } from "typeorm";
import { Cart } from "../models/cart";
export declare class CartRepository extends Repository<Cart> {
    findWithRelations(relations?: string[], optionsWithoutRelations?: Omit<FindManyOptions<Cart>, "relations">): Promise<Cart[]>;
    findOneWithRelations(relations?: string[], optionsWithoutRelations?: Omit<FindManyOptions<Cart>, "relations">): Promise<Cart>;
}
