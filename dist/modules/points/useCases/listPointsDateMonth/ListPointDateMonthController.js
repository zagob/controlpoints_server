"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPointDateMonthController = void 0;
const tsyringe_1 = require("tsyringe");
const ListPointDateMonthUseCase_1 = require("./ListPointDateMonthUseCase");
class ListPointDateMonthController {
    async handle(request, response) {
        const { userId } = request.params;
        const { year, month, perPage, page } = request.query;
        const listPointsDateMonth = tsyringe_1.container.resolve(ListPointDateMonthUseCase_1.ListPointDateMonthUseCase);
        const result = await listPointsDateMonth.execute({
            year,
            month,
            userId,
            perPage,
            page,
        });
        return response.json(result);
    }
}
exports.ListPointDateMonthController = ListPointDateMonthController;
//# sourceMappingURL=ListPointDateMonthController.js.map