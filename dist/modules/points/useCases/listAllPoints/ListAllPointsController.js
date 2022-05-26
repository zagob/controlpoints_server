"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAllPointsController = void 0;
const tsyringe_1 = require("tsyringe");
const ListAllPointsUseCase_1 = require("./ListAllPointsUseCase");
class ListAllPointsController {
    async handle(request, response) {
        const listAllPoints = tsyringe_1.container.resolve(ListAllPointsUseCase_1.ListAllPointsUseCase);
        const result = await listAllPoints.execute();
        return response.json(result);
    }
}
exports.ListAllPointsController = ListAllPointsController;
//# sourceMappingURL=ListAllPointsController.js.map