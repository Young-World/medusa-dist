import { IdempotencyKey } from "../models";
import { RequestContext } from "../types/request";
export declare type CartCompletionResponse = {
    /** The response code for the completion request */
    response_code: number;
    /** The response body for the completion request */
    response_body: object;
};
export interface ICartCompletionStrategy {
    /**
     * Takes a cart id and completes the cart. This for example takes place when
     * creating an order or confirming a swap.
     * @param cartId - the id of the Cart to complete.
     * @param idempotencyKey - the idempotency key for the request
     * @param context - the request context for the completion request
     * @return the response for the completion request
     */
    complete(cartId: string, idempotencyKey: IdempotencyKey, context: RequestContext): Promise<CartCompletionResponse>;
}
export declare abstract class AbstractCartCompletionStrategy implements ICartCompletionStrategy {
    abstract complete(cartId: string, idempotencyKey: IdempotencyKey, context: RequestContext): Promise<CartCompletionResponse>;
}
export declare function isCartCompletionStrategy(obj: unknown): boolean;
