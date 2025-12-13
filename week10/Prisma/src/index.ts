import { PrismaClient } from "@prisma/client";
//insert
const prisma = new PrismaClient();
//const users = await prisma.user.findMany()
// async function insertUser(email:string, password:string, firstName:string, lastName:string) {
//     const res = await prisma.user.create({
//         data: {
//             email,
//             password,
//             firstName,
//             lastName
//         },
//         select: {
//             id: true,
//             password: true,
//             firstName: true
//         },
//     })
//     console.log(res);
// }
// insertUser("harki@gamil.com","password","hark","sigh")



//update
const prisma = new PrismaClient();

interface updateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(email:string, {
            firstName,
            lastName
        }: updateParams){
            const res = await prisma.user.update({
                where: {email},
                data: {
                    firstName,
                    lastName
                }
            })
            console.log(res);
        }

        updateUser('hark@gmail.com', {
            firstName: 'hehehehehe',
            lastName: 'sihjdj'
        })



//get a user's detail
const prisma = new PrismaClient();

async function getUSer(email:string) {
    
}