import { AwilixContainer } from "awilix";
import { Request } from "express";
import { LoggerOptions } from "typeorm";
import { Logger as _Logger } from "winston";
import { Customer, User } from "../models";
import { FindConfig, RequestQueryFields } from "./common";
declare global {
    namespace Express {
        interface Request {
            user?: (User | Customer) & {
                customer_id?: string;
                userId?: string;
            };
            scope: MedusaContainer;
            validatedQuery: RequestQueryFields & Record<string, unknown>;
            validatedBody: unknown;
            listConfig: FindConfig<unknown>;
            retrieveConfig: FindConfig<unknown>;
            filterableFields: Record<string, unknown>;
            errors: string[];
        }
    }
}
export declare type ExtendedRequest<TEntity> = Request & {
    resource: TEntity;
};
export declare type ClassConstructor<T> = {
    new (...args: unknown[]): T;
};
export declare type MedusaContainer = AwilixContainer & {
    registerAdd: <T>(name: string, registration: T) => MedusaContainer;
};
export declare type Logger = _Logger & {
    progress: (activityId: string, msg: string) => void;
    info: (msg: string) => void;
    warn: (msg: string) => void;
};
export declare type ConfigModule = {
    projectConfig: {
        redis_url?: string;
        jwt_secret?: string;
        cookie_secret?: string;
        database_url?: string;
        database_type: string;
        database_database?: string;
        database_logging: LoggerOptions;
        database_extra?: Record<string, unknown> & {
            ssl: {
                rejectUnauthorized: false;
            };
        };
        store_cors?: string;
        admin_cors?: string;
    };
    featureFlags: Record<string, boolean | string>;
    plugins: ({
        resolve: string;
        options: Record<string, unknown>;
    } | string)[];
};
