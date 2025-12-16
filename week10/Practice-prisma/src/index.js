import { PrismaClient } from "@prisma/client/extension";
const prisma = new PrismaClient();
async function insertUser(email, password, firstname, lastName) {
    const res = await prisma.User.create({
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
// interface UpdateParams {
//     firstName: string;
//     lastName: string;
// }
// async function UpdateUser(username:string, {
//     firstName,
//     lastName
// }: UpdateParams) {
//     prisma.user.update({
//         where: { email: username },
//         data: {
//             firstName,
//             lastName
//         }
//     })
// }
//# sourceMappingURL=index.js.map