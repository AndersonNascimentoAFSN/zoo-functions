"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
function animalsByIds(data, ...ids) {
    return data.animals.filter(({ id }) => ids.includes(id));
}
exports.default = animalsByIds;
