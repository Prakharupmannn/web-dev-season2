// interface User {
//     id: string;
//     name: string;
//     age: number;
//     email: string;
//     password: string;
// }

// // function sumOfAge(user1: User, user2: User) {
// //     return user1.age + user2.age;
// // }

// // const age = sumOfAge({name: "otot", age:22}, {name:"tuntun", age:23});
// // console.log(age)






// //by using pick function
// type UpdateUser = Pick<User, 'name'|'email'|'age'>

// type optionalUpdateUser = Partial<UpdateUser>

// function updateUser(updateUser: optionalUpdateUser){
//     //hit the database to update the user
//     console.log('Name: ${user.name}, Email: ${user.email}');
// };





//RECORDS
// type Users = Record<string, {age:number, name:string}>;

// const users : Users = {
//     "rel@120": {age:22, name:"harsh"},
//     "ramp@": {age: 21, name:"jow"}
// }



// //MAP
// type User = {
//     name: string;
//     age: number;
//     email: string;
// }

// const users = new Map<string, User>()
// users.set("rew@ssdd", { name: "ras", age: 22, email: "kjdvnkjn"})
// users.set("akjdnjlsvn", { name: "lsjn", age: 33, email: "dnnsk"})

// const user = users.get("rew@ssdd")
// console.log(user)





// //EXCLUDE
//  type EventType = 'click'| 'scroll' | 'mousemove';

// type ExcludeEvent = Exclude<EventType, 'scroll'>

// const handleEvent = (event: ExcludeEvent) => {
//     console.log(`Handling event: ${event}`);
// }

// handleEvent('click');







//type inference in zod

import { z } from 'zod';
import express from "express";

const app = express();

const userProfileSchema = z.object({
    name: z.string(),
    email: z.string().email().optional(),
})

export type FinalUserSchema = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res)=> {
    const { success } = userProfileSchema.safeParse(req.body);
    const updateBody:FinalUserSchema = req.body;

    if(!success) {
        req.status(411).json({})
        return
    }

    res.json({
        message: "User updated"
    })
})
app.listen(3000);