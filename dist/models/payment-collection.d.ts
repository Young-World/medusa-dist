import { SoftDeletableEntity } from "../interfaces/models/soft-deletable-entity";
import { Currency, Payment, PaymentSession, Region } from ".";
export declare enum PaymentCollectionStatus {
    NOT_PAID = "not_paid",
    AWAITING = "awaiting",
    AUTHORIZED = "authorized",
    PARTIALLY_AUTHORIZED = "partially_authorized",
    CAPTURED = "captured",
    PARTIALLY_CAPTURED = "partially_captured",
    REFUNDED = "refunded",
    PARTIALLY_REFUNDED = "partially_refunded",
    CANCELED = "canceled",
    REQUIRES_ACTION = "requires_action"
}
export declare enum PaymentCollectionType {
    ORDER_EDIT = "order_edit"
}
export declare class PaymentCollection extends SoftDeletableEntity {
    type: PaymentCollectionType;
    status: PaymentCollectionStatus;
    description: string;
    amount: number;
    authorized_amount: number;
    refunded_amount: number;
    region_id: string;
    region: Region;
    currency_code: string;
    currency: Currency;
    payment_sessions: PaymentSession[];
    payments: Payment[];
    metadata: Record<string, unknown>;
    created_by: string;
    private beforeInsert;
}
