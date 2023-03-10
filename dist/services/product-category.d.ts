import { EntityManager } from "typeorm";
import { TransactionBaseService } from "../interfaces";
import { ProductCategory } from "../models";
import { ProductCategoryRepository } from "../repositories/product-category";
import { FindConfig, Selector, QuerySelector } from "../types/common";
import { EventBusService } from ".";
import { CreateProductCategoryInput, UpdateProductCategoryInput } from "../types/product-category";
declare type InjectedDependencies = {
    manager: EntityManager;
    eventBusService: EventBusService;
    productCategoryRepository: typeof ProductCategoryRepository;
};
/**
 * Provides layer to manipulate product categories.
 */
declare class ProductCategoryService extends TransactionBaseService {
    protected readonly productCategoryRepo_: typeof ProductCategoryRepository;
    protected readonly eventBusService_: EventBusService;
    protected transactionManager_: EntityManager | undefined;
    protected manager_: EntityManager;
    static Events: {
        CREATED: string;
        UPDATED: string;
        DELETED: string;
    };
    constructor({ manager, productCategoryRepository, eventBusService, }: InjectedDependencies);
    /**
     * Lists product category based on the provided parameters and includes the count of
     * product category that match the query.
     * @return an array containing the product category as
     *   the first element and the total count of product category that matches the query
     *   as the second element.
     */
    listAndCount(selector: QuerySelector<ProductCategory>, config?: FindConfig<ProductCategory>, treeSelector?: QuerySelector<ProductCategory>): Promise<[ProductCategory[], number]>;
    /**
     * Retrieves a product category by id.
     * @param productCategoryId - the id of the product category to retrieve.
     * @param config - the config of the product category to retrieve.
     * @return the product category.
     */
    retrieve(productCategoryId: string, config?: FindConfig<ProductCategory>, selector?: Selector<ProductCategory>): Promise<ProductCategory>;
    /**
     * Creates a product category
     * @param productCategory - params used to create
     * @return created product category
     */
    create(productCategoryInput: CreateProductCategoryInput): Promise<ProductCategory>;
    /**
     * Updates a product category
     * @param productCategoryId - id of product category to update
     * @param productCategoryInput - parameters to update in product category
     * @return updated product category
     */
    update(productCategoryId: string, productCategoryInput: UpdateProductCategoryInput): Promise<ProductCategory>;
    /**
     * Deletes a product category
     *
     * @param productCategoryId is the id of the product category to delete
     * @return a promise
     */
    delete(productCategoryId: string): Promise<void>;
    /**
     * Add a batch of product to a product category
     * @param productCategoryId - The id of the product category on which to add the products
     * @param productIds - The products ids to attach to the product category
     * @return the product category on which the products have been added
     */
    addProducts(productCategoryId: string, productIds: string[]): Promise<void>;
    /**
     * Remove a batch of product from a product category
     * @param productCategoryId - The id of the product category on which to remove the products
     * @param productIds - The products ids to remove from the product category
     * @return the product category on which the products have been removed
     */
    removeProducts(productCategoryId: string, productIds: string[]): Promise<void>;
}
export default ProductCategoryService;
