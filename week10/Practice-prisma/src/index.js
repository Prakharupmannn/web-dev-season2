import { PrismaClient } from "@prisma/client/extension";
const prisma = new PrismaClient();
async function insertUser(email, password, firstname, lastName) {
    const res = await prisma.user.create({
        data: {
            email,
            password,
            firstname,
            lastName
        },
        select: {
            id: true,
            password: true,
            firstname: true,
            lastName: true
        }
    });
    console.log(res);
}
insertUser("harsh@gmail.com", "password", "harsh", "soni");
//# sourceMappingURL=index.js.map