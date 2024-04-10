"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const core_config_service_1 = require("./core/core-config.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(3000);
    app.enableCors();
    app.enableShutdownHooks();
    let coreConfigService;
    coreConfigService = app.get(core_config_service_1.CoreConfigService);
    console.log(`NCDs Healthcare Lab BY Engineer And Researcher - SKLSONGKIAT.COM`);
}
bootstrap();
//# sourceMappingURL=main.js.map