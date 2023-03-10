import { AbstractBatchJobStrategy, TransactionBaseService } from "../interfaces";
import { EntityManager } from "typeorm";
declare type InjectedDependencies = {
    manager: EntityManager;
    [key: string]: unknown;
};
export default class StrategyResolver extends TransactionBaseService {
    protected readonly container: InjectedDependencies;
    protected manager_: EntityManager;
    protected transactionManager_: EntityManager | undefined;
    constructor(container: InjectedDependencies);
    resolveBatchJobByType(type: string): AbstractBatchJobStrategy;
}
export {};
