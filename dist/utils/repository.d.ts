import { Repository, SelectQueryBuilder } from "typeorm";
import { ExtendedFindConfig } from "../types/common";
/**
 * Custom query entity, it is part of the creation of a custom findWithRelationsAndCount needs.
 * Allow to query the relations for the specified entity ids
 * @param repository
 * @param entityIds
 * @param groupedRelations
 * @param withDeleted
 * @param select
 * @param customJoinBuilders
 */
export declare function queryEntityWithIds<T>(repository: Repository<T>, entityIds: string[], groupedRelations: {
    [toplevel: string]: string[];
}, withDeleted?: boolean, select?: (keyof T)[], customJoinBuilders?: ((qb: SelectQueryBuilder<T>, alias: string, toplevel: string) => boolean)[]): Promise<T[]>;
/**
 * Custom query entity without relations, it is part of the creation of a custom findWithRelationsAndCount needs.
 * Allow to query the entities without taking into account the relations. The relations will be queried separately
 * using the queryEntityWithIds util
 * @param repository
 * @param optionsWithoutRelations
 * @param shouldCount
 * @param customJoinBuilders
 */
export declare function queryEntityWithoutRelations<T>(repository: Repository<T>, optionsWithoutRelations: Omit<ExtendedFindConfig<T, unknown>, "relations">, shouldCount?: boolean, customJoinBuilders?: ((qb: SelectQueryBuilder<T>, alias: string) => void)[]): Promise<[T[], number]>;
/**
 * Grouped the relation to the top level entity
 * @param relations
 */
export declare function getGroupedRelations(relations: string[]): {
    [toplevel: string]: string[];
};
/**
 * Merged the entities and relations that composed by the result of queryEntityWithIds and queryEntityWithoutRelations
 * call
 * @param entitiesAndRelations
 */
export declare function mergeEntitiesWithRelations<T>(entitiesAndRelations: Array<Partial<T>>): T[];
/**
 * Apply the appropriate order depending on the requirements
 * @param repository
 * @param order The field on which to apply the order (e.g { "variants.prices.amount": "DESC" })
 * @param qb
 * @param alias
 * @param shouldJoin In case a join is already applied elsewhere and therefore you want to avoid to re joining the data in that case you can return false for specific relations
 */
export declare function applyOrdering<T>({ repository, order, qb, alias, shouldJoin, }: {
    repository: Repository<T>;
    order: Record<string, "ASC" | "DESC">;
    qb: SelectQueryBuilder<T>;
    alias: string;
    shouldJoin: (relation: string) => boolean;
}): void;
