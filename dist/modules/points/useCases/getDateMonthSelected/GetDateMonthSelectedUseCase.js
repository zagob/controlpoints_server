"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDateMonthSelectedUseCase = void 0;
const tsyringe_1 = require("tsyringe");
let GetDateMonthSelectedUseCase = class GetDateMonthSelectedUseCase {
    constructor(pointsRepository) {
        this.pointsRepository = pointsRepository;
    }
    async execute(year, month, userId) {
        return await this.pointsRepository.getDateMonth(userId, year, month);
    }
};
GetDateMonthSelectedUseCase = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("PointsRepository"))
], GetDateMonthSelectedUseCase);
exports.GetDateMonthSelectedUseCase = GetDateMonthSelectedUseCase;
//# sourceMappingURL=GetDateMonthSelectedUseCase.js.map