"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = __importDefault(require("../data"));
const { animals } = data_1.default;
function animalsOlderThan({ animalName, ageAnimal }) {
    var _a;
    return (_a = animals.find(({ name }) => name === animalName)) === null || _a === void 0 ? void 0 : _a.residents.every(({ age }) => age >= ageAnimal);
}
console.log(animalsOlderThan({ animalName: 'lions', ageAnimal: 5 }));
exports.default = animalsOlderThan;
