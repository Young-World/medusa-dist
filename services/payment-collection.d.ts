import { DeepPartial, EntityManager } from "typeorm";
import { FindConfig } from "../types/common";
import { PaymentCollectionRepository } from "../repositories/payment-collection";
import { PaymentCollection } from "../models";
import { TransactionBaseService } from "../interfaces";
import { EventBusService } from "./index";
import { CreatePaymentCollectionInput } from "../types/payment-collection";
declare type InjectedDependencies = {
    manager: EntityManager;
    paymentCollectionRepository: typeof PaymentCollectionRepository;
    eventBusService: EventBusService;
};
export default class PaymentCollectionService extends TransactionBaseService {
    static readonly Events: {
        CREATED: string;
        UPDATED: string;
        DELETED: string;
    };
    protected readonly manager_: EntityManager;
    protected transactionManager_: EntityManager | undefined;
    protected readonly eventBusService_: EventBusService;
    protected readonly paymentCollectionRepository_: typeof PaymentCollectionRepository;
    constructor({ manager, paymentCollectionRepository, eventBusService, }: InjectedDependencies);
    retrieve(paymentCollectionId: string, config?: FindConfig<PaymentCollection>): Promise<PaymentCollection>;
    create(data: CreatePaymentCollectionInput): Promise<PaymentCollection>;
    update(paymentCollectionId: string, data: DeepPartial<PaymentCollection>): Promise<PaymentCollection>;
    delete(paymentCollectionId: string): Promise<PaymentCollection | undefined>;
}
export {};
