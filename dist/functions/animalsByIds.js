"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = __importDefault(require("../data"));
function animalsByIds(...ids) {
    const { animals } = data_1.default;
    return animals.filter(({ id }) => ids.includes(id));
}
exports.default = animalsByIds;
