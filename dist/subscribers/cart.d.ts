import EventBusService from "../services/event-bus";
import { CartService } from "../services";
import { EntityManager } from "typeorm";
declare type InjectedDependencies = {
    eventBusService: EventBusService;
    cartService: CartService;
    manager: EntityManager;
};
declare class CartSubscriber {
    protected readonly manager_: EntityManager;
    protected readonly cartService_: CartService;
    protected readonly eventBus_: EventBusService;
    constructor({ manager, cartService, eventBusService }: InjectedDependencies);
    onCustomerUpdated(cartId: any): Promise<void>;
}
export default CartSubscriber;
