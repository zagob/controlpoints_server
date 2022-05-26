"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePointWithIdController = void 0;
const tsyringe_1 = require("tsyringe");
const DeletePointWithIdUseCase_1 = require("./DeletePointWithIdUseCase");
class DeletePointWithIdController {
    async handle(request, response) {
        const { id } = request.params;
        const deletePointWithId = tsyringe_1.container.resolve(DeletePointWithIdUseCase_1.DeletePointWithIdUseCase);
        const result = await deletePointWithId.execute(id);
        return response.json(result);
    }
}
exports.DeletePointWithIdController = DeletePointWithIdController;
//# sourceMappingURL=DeletePointWithIdController.js.map