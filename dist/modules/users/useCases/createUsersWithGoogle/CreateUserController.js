"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const CreateUserUseCase_1 = require("./CreateUserUseCase");
const tsyringe_1 = require("tsyringe");
class CreateUserController {
    async handle(request, response) {
        const { id, name, image } = request.body;
        const createUserUseCase = tsyringe_1.container.resolve(CreateUserUseCase_1.CreateUserUseCase);
        const result = await createUserUseCase.execute({
            id,
            name,
            image,
        });
        return response.json(result);
    }
}
exports.CreateUserController = CreateUserController;
//# sourceMappingURL=CreateUserController.js.map