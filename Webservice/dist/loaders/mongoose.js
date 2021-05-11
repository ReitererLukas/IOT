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
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../config"));
const util_1 = require("util");
exports.default = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = util_1.format('mongodb://%s:%s@%s:%s/%s?authMechanism=%s', config_1.default.database.user, config_1.default.database.password, config_1.default.database.host, config_1.default.database.port, config_1.default.database.name, config_1.default.database.authMechanism);
    yield mongoose_1.default.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.info("MongoDB Successfully connected!");
    }).catch(err => {
        console.error(err);
        return process.exit(1);
    });
});
//# sourceMappingURL=mongoose.js.map