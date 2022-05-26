"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePointController = void 0;
const tsyringe_1 = require("tsyringe");
const CreatePointUseCase_1 = require("./CreatePointUseCase");
class CreatePointController {
    async handle(request, response) {
        const { userId, selectedDate, entryOne, exitOne, entryTwo, exitTwo, isSimulation, } = request.body;
        const createPointsUseCase = tsyringe_1.container.resolve(CreatePointUseCase_1.CreatePointUseCase);
        const result = await createPointsUseCase.execute({
            userId,
            selectedDate,
            entryOne,
            exitOne,
            entryTwo,
            exitTwo,
            isSimulation,
        });
        return response.json(result);
    }
}
exports.CreatePointController = CreatePointController;
//# sourceMappingURL=CreatePointController.js.map