import Bull from "bull";
import Redis from "ioredis";
import { EntityManager } from "typeorm";
import { ConfigModule, Logger } from "../types/global";
import { StagedJobRepository } from "../repositories/staged-job";
import { StagedJob } from "../models";
declare type InjectedDependencies = {
    manager: EntityManager;
    logger: Logger;
    stagedJobRepository: typeof StagedJobRepository;
    redisClient: Redis.Redis;
    redisSubscriber: Redis.Redis;
};
declare type Subscriber<T = unknown> = (data: T, eventName: string) => Promise<void>;
/**
 * Can keep track of multiple subscribers to different events and run the
 * subscribers when events happen. Events will run asynchronously.
 */
export default class EventBusService {
    protected readonly config_: ConfigModule;
    protected readonly manager_: EntityManager;
    protected readonly logger_: Logger;
    protected readonly stagedJobRepository_: typeof StagedJobRepository;
    protected readonly observers_: Map<string | symbol, Subscriber[]>;
    protected readonly cronHandlers_: Map<string | symbol, Subscriber[]>;
    protected readonly redisClient_: Redis.Redis;
    protected readonly redisSubscriber_: Redis.Redis;
    protected readonly cronQueue_: Bull;
    protected queue_: Bull;
    protected shouldEnqueuerRun: boolean;
    protected transactionManager_: EntityManager | undefined;
    protected enqueue_: Promise<void>;
    constructor({ manager, logger, stagedJobRepository, redisClient, redisSubscriber, }: InjectedDependencies, config: ConfigModule, singleton?: boolean);
    withTransaction(transactionManager: any): this | EventBusService;
    /**
     * Adds a function to a list of event subscribers.
     * @param event - the event that the subscriber will listen for.
     * @param subscriber - the function to be called when a certain event
     * happens. Subscribers must return a Promise.
     * @return this
     */
    subscribe(event: string | symbol, subscriber: Subscriber): this;
    /**
     * Adds a function to a list of event subscribers.
     * @param event - the event that the subscriber will listen for.
     * @param subscriber - the function to be called when a certain event
     * happens. Subscribers must return a Promise.
     * @return this
     */
    unsubscribe(event: string | symbol, subscriber: Subscriber): this;
    /**
     * Adds a function to a list of event subscribers.
     * @param event - the event that the subscriber will listen for.
     * @param subscriber - the function to be called when a certain event
     * happens. Subscribers must return a Promise.
     * @return this
     */
    protected registerCronHandler_(event: string | symbol, subscriber: Subscriber): this;
    /**
     * Calls all subscribers when an event occurs.
     * @param {string} eventName - the name of the event to be process.
     * @param data - the data to send to the subscriber.
     * @param options - options to add the job with
     * @return the job from our queue
     */
    emit<T>(eventName: string, data: T, options?: {
        delay?: number;
    }): Promise<StagedJob | void>;
    startEnqueuer(): void;
    stopEnqueuer(): Promise<void>;
    enqueuer_(): Promise<void>;
    /**
     * Handles incoming jobs.
     * @param job The job object
     * @return resolves to the results of the subscriber calls.
     */
    worker_: <T>(job: {
        data: {
            eventName: string;
            data: T;
        };
    }) => Promise<unknown[]>;
    /**
     * Handles incoming jobs.
     * @param job The job object
     * @return resolves to the results of the subscriber calls.
     */
    cronWorker_: <T>(job: {
        data: {
            eventName: string;
            data: T;
        };
    }) => Promise<unknown[]>;
    /**
     * Registers a cron job.
     * @param eventName - the name of the event
     * @param data - the data to be sent with the event
     * @param cron - the cron pattern
     * @param handler - the handler to call on each cron job
     * @return void
     */
    createCronJob<T>(eventName: string, data: T, cron: string, handler: Subscriber): void;
}
export {};
