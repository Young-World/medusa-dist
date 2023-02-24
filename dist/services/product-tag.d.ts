import { EntityManager } from "typeorm";
import { ProductTag } from "../models";
import { ProductTagRepository } from "../repositories/product-tag";
import { FindConfig } from "../types/common";
import { FilterableProductTagProps } from "../types/product";
import { TransactionBaseService } from "../interfaces";
declare type ProductTagConstructorProps = {
    manager: EntityManager;
    productTagRepository: typeof ProductTagRepository;
};
declare class ProductTagService extends TransactionBaseService {
    protected manager_: EntityManager;
    protected transactionManager_: EntityManager | undefined;
    protected readonly tagRepo_: typeof ProductTagRepository;
    constructor({ manager, productTagRepository }: ProductTagConstructorProps);
    /**
     * Retrieves a product tag by id.
     * @param tagId - the id of the product tag to retrieve
     * @param config - the config to retrieve the tag by
     * @return the collection.
     */
    retrieve(tagId: string, config?: FindConfig<ProductTag>): Promise<ProductTag>;
    /**
     * Creates a product tag
     * @param tag - the product tag to create
     * @return created product tag
     */
    create(tag: Partial<ProductTag>): Promise<ProductTag>;
    /**
     * Lists product tags
     * @param selector - the query object for find
     * @param config - the config to be used for find
     * @return the result of the find operation
     */
    list(selector?: FilterableProductTagProps, config?: FindConfig<ProductTag>): Promise<ProductTag[]>;
    /**
     * Lists product tags and adds count.
     * @param selector - the query object for find
     * @param config - the config to be used for find
     * @return the result of the find operation
     */
    listAndCount(selector?: FilterableProductTagProps, config?: FindConfig<ProductTag>): Promise<[ProductTag[], number]>;
}
export default ProductTagService;
