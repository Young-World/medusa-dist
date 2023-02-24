import { EntityManager } from "typeorm";
import { TransactionBaseService } from "../interfaces";
import { ReturnReason } from "../models";
import { ReturnReasonRepository } from "../repositories/return-reason";
import { FindConfig, Selector } from "../types/common";
import { CreateReturnReason, UpdateReturnReason } from "../types/return-reason";
declare type InjectedDependencies = {
    manager: EntityManager;
    returnReasonRepository: typeof ReturnReasonRepository;
};
declare class ReturnReasonService extends TransactionBaseService {
    protected readonly retReasonRepo_: typeof ReturnReasonRepository;
    protected manager_: EntityManager;
    protected transactionManager_: EntityManager | undefined;
    constructor({ manager, returnReasonRepository }: InjectedDependencies);
    create(data: CreateReturnReason): Promise<ReturnReason | never>;
    update(id: string, data: UpdateReturnReason): Promise<ReturnReason>;
    /**
     * @param {Object} selector - the query object for find
     * @param {Object} config - config object
     * @return {Promise} the result of the find operation
     */
    list(selector: Selector<ReturnReason>, config?: FindConfig<ReturnReason>): Promise<ReturnReason[]>;
    /**
     * Gets an order by id.
     * @param {string} id - id of order to retrieve
     * @param {Object} config - config object
     * @return {Promise<Order>} the order document
     */
    retrieve(id: string, config?: FindConfig<ReturnReason>): Promise<ReturnReason | never>;
    delete(returnReasonId: string): Promise<void>;
}
export default ReturnReasonService;
