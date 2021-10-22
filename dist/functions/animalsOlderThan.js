"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
;
function animalsOlderThan({ animalName, ageAnimal }, data) {
    var _a;
    return (_a = data.animals.find(({ name }) => name === animalName)) === null || _a === void 0 ? void 0 : _a.residents.every(({ age }) => age >= ageAnimal);
}
;
exports.default = animalsOlderThan;
