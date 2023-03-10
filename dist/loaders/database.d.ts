import { Connection } from "typeorm";
import { AwilixContainer } from "awilix";
import { ConfigModule } from "../types/global";
declare type Options = {
    configModule: ConfigModule;
    container: AwilixContainer;
};
declare const _default: ({ container, configModule, }: Options) => Promise<Connection>;
export default _default;
