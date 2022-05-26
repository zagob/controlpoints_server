"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPointWithIdController = void 0;
const tsyringe_1 = require("tsyringe");
const ListPointWithUserIdUseCase_1 = require("./ListPointWithUserIdUseCase");
class ListPointWithIdController {
    async handle(request, response) {
        const { id } = request.params;
        const listPointWithId = tsyringe_1.container.resolve(ListPointWithUserIdUseCase_1.ListPointWithIdUseCase);
        const result = await listPointWithId.execute(id);
        return response.json(result);
    }
}
exports.ListPointWithIdController = ListPointWithIdController;
//# sourceMappingURL=ListPointWithUserIdController.js.map