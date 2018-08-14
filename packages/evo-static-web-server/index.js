import config from "./config/config";
import StaticWebServer from "./src/StaticWebServer";

export const staticWebServerFactory = {
    createInstance: (staticDirectory, port = config.port) => {
        return new StaticWebServer(staticDirectory, port);
    }
};

export default StaticWebServer;