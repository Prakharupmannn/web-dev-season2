const zod = require("zod");

//if this is an array of number with atleast 1 input , return true , else return false
function validateInput(obj) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8).nonempty()
    })
    //const schema = zod.array(zod.number());
    const response = schema.safeParse(obj);
    console.log(response);
}
// validateInput([1, 2, 3]); 
validateInput({
    email: "prakhar@gmail.com",
    password: "9399641235"
});