import { IInventoryService } from "../../../../../interfaces";
import { InventoryItemDTO, InventoryLevelDTO } from "../../../../../types/inventory";
export declare const buildLevelsByInventoryItemId: (inventoryLevels: InventoryLevelDTO[], locationIds: string[]) => {};
export declare const getLevelsByInventoryItemId: (items: InventoryItemDTO[], locationIds: string[], inventoryService: IInventoryService) => Promise<{}>;
export declare const joinLevels: (inventoryItems: InventoryItemDTO[], locationIds: string[], inventoryService: IInventoryService) => Promise<{
    location_levels: any;
    id: string;
    sku?: string | null | undefined;
    origin_country?: string | null | undefined;
    hs_code?: string | null | undefined;
    requires_shipping: boolean;
    mid_code?: string | null | undefined;
    material?: string | null | undefined;
    weight?: number | null | undefined;
    length?: number | null | undefined;
    height?: number | null | undefined;
    width?: number | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
    created_at: string | Date;
    updated_at: string | Date;
    deleted_at: string | Date | null;
}[]>;
