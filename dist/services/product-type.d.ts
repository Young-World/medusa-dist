import { EntityManager } from "typeorm";
import { ProductType } from "../models/product-type";
import { ProductTypeRepository } from "../repositories/product-type";
import { FindConfig } from "../types/common";
import { FilterableProductTypeProps } from "../types/product";
import { TransactionBaseService } from "../interfaces";
declare class ProductTypeService extends TransactionBaseService {
    protected manager_: EntityManager;
    protected transactionManager_: EntityManager | undefined;
    protected readonly typeRepository_: typeof ProductTypeRepository;
    constructor({ manager, productTypeRepository }: {
        manager: any;
        productTypeRepository: any;
    });
    /**
     * Gets a product by id.
     * Throws in case of DB Error and if product was not found.
     * @param id - id of the product to get.
     * @param config - object that defines what should be included in the
     *   query response
     * @return the result of the find one operation.
     */
    retrieve(id: string, config?: FindConfig<ProductType>): Promise<ProductType>;
    /**
     * Lists product types
     * @param selector - the query object for find
     * @param config - the config to be used for find
     * @return the result of the find operation
     */
    list(selector?: FilterableProductTypeProps, config?: FindConfig<ProductType>): Promise<ProductType[]>;
    /**
     * Lists product tags and adds count.
     * @param selector - the query object for find
     * @param config - the config to be used for find
     * @return the result of the find operation
     */
    listAndCount(selector?: FilterableProductTypeProps, config?: FindConfig<ProductType>): Promise<[ProductType[], number]>;
}
export default ProductTypeService;
