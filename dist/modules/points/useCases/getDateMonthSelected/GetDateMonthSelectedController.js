"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDateMonthSelectedController = void 0;
const tsyringe_1 = require("tsyringe");
const GetDateMonthSelectedUseCase_1 = require("./GetDateMonthSelectedUseCase");
class GetDateMonthSelectedController {
    async handle(request, response) {
        const { userId } = request.params;
        const { year, month } = request.query;
        const getDateMonthSelected = tsyringe_1.container.resolve(GetDateMonthSelectedUseCase_1.GetDateMonthSelectedUseCase);
        const result = await getDateMonthSelected.execute(year, month, userId);
        return response.json(result);
    }
}
exports.GetDateMonthSelectedController = GetDateMonthSelectedController;
//# sourceMappingURL=GetDateMonthSelectedController.js.map