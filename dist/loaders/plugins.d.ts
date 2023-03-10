import { Express } from "express";
import { ConfigModule, MedusaContainer } from "../types/global";
declare type Options = {
    rootDirectory: string;
    container: MedusaContainer;
    configModule: ConfigModule;
    app: Express;
    activityId: string;
};
declare type PluginDetails = {
    resolve: string;
    name: string;
    id: string;
    options: Record<string, unknown>;
    version: string;
};
export declare const isSearchEngineInstalledResolutionKey = "isSearchEngineInstalled";
/**
 * Registers all services in the services directory
 */
declare const _default: ({ rootDirectory, container, app, configModule, activityId, }: Options) => Promise<void>;
export default _default;
export declare function registerPluginModels({ rootDirectory, container, configModule, }: {
    rootDirectory: string;
    container: MedusaContainer;
    configModule: ConfigModule;
}): Promise<void>;
export declare function registerStrategies(pluginDetails: PluginDetails, container: MedusaContainer): void;
/**
 * Registers a service at the right location in our container. If the service is
 * a BaseService instance it will be available directly from the container.
 * PaymentService instances are added to the paymentProviders array in the
 * container. Names are camelCase formatted and namespaced by the folder i.e:
 * services/example-payments -> examplePaymentsService
 * @param {object} pluginDetails - the plugin details including plugin options,
 *    version, id, resolved path, etc. See resolvePlugin
 * @param {object} container - the container where the services will be
 *    registered
 * @return {void}
 */
export declare function registerServices(pluginDetails: PluginDetails, container: MedusaContainer): Promise<void>;
