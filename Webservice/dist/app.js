"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const loaders_1 = __importDefault(require("./loaders"));
const device_1 = __importDefault(require("./models/mongo/device"));
const app = express_1.default();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield loaders_1.default(app);
        app.listen(config_1.default.port, () => {
            return console.info(`Express is listening on http://localhost:${config_1.default.port}/welcome`);
        }).on('error', function (err) {
            console.log(err);
        });
        /**Create Test Data*/
        for (let i = 0; i < 10; i++) {
            console.log("Created" + i);
            device_1.default(`Device${i}`, `password${i}`);
        }
    });
}
main();
//# sourceMappingURL=app.js.map