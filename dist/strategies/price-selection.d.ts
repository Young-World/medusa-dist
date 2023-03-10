import { EntityManager } from "typeorm";
import { AbstractPriceSelectionStrategy, ICacheService, IPriceSelectionStrategy, PriceSelectionContext, PriceSelectionResult } from "../interfaces";
import { MoneyAmountRepository } from "../repositories/money-amount";
import { FlagRouter } from "../utils/flag-router";
declare class PriceSelectionStrategy extends AbstractPriceSelectionStrategy {
    protected manager_: EntityManager;
    protected readonly featureFlagRouter_: FlagRouter;
    protected moneyAmountRepository_: typeof MoneyAmountRepository;
    protected cacheService_: ICacheService;
    constructor({ manager, featureFlagRouter, moneyAmountRepository, cacheService, }: {
        manager: any;
        featureFlagRouter: any;
        moneyAmountRepository: any;
        cacheService: any;
    });
    withTransaction(manager: EntityManager): IPriceSelectionStrategy;
    calculateVariantPrice(variant_id: string, context: PriceSelectionContext): Promise<PriceSelectionResult>;
    private calculateVariantPrice_new;
    private calculateVariantPrice_old;
    private getCacheKey;
}
export default PriceSelectionStrategy;
