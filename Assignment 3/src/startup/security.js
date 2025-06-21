"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const chalk_1 = __importDefault(require("chalk"));
const securitySetup = (app, express) => app
    .use((0, cors_1.default)())
    .use(express.json())
    .use((0, morgan_1.default)((tokens, req, res) => {
    const status = Number(tokens.status(req, res));
    const color = status >= 500
        ? chalk_1.default.red
        : status >= 400
            ? chalk_1.default.yellow
            : status >= 300
                ? chalk_1.default.cyan
                : chalk_1.default.green;
    return [
        chalk_1.default.gray(tokens.method(req, res)),
        chalk_1.default.blue(tokens.url(req, res)),
        color(tokens.status(req, res)),
        chalk_1.default.magenta(tokens['response-time'](req, res) + ' ms'),
    ].join(' ');
}));
exports.default = securitySetup;
