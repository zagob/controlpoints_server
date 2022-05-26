"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const prismaClient_1 = require("../../../../infra/database/prismaClient");
class UsersRepository {
    async create({ id, image, name }) {
        const createUser = await prismaClient_1.prisma.user.create({
            data: {
                id,
                image,
                name,
            },
        });
        return createUser;
    }
    async findById(id) {
        const findByIdUser = await prismaClient_1.prisma.user.findFirst({
            where: {
                id: {
                    equals: id,
                    mode: "insensitive",
                },
            },
        });
        return findByIdUser;
    }
}
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=UsersRepository.js.map