import { Heading } from "../componenets/Heading"
import { SubHeading } from "../componenets/SubHeading"
import { InputBox } from "../componenets/InputBox"
import { Button } from "../componenets/Button"
import { BottomWarning } from "../componenets/BottomWarning"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export const Signin = () => {
    const navigate = useNavigate();

    //store email and passworrd
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const handleSignin = async () => {
        try {
            const response = await axios.post("http://localhost:3000/api/v1/user/signin" , {
                email,
                password
            });

            //if login successful -> save token + navigate
            localStorage.setItem("token", response.data.token);
            navigate("/dashboard");
        } catch (err) {
            alert("Invalid Email and Password");
        }
    }

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign in"}/>
                <SubHeading label={"Enter your credentials to access your account"} />
                <InputBox placeholder="Prakhar@gmail.com" label={"Email"} onChange={(e) => setEmail(e.target.value)}/>
                <InputBox placeholder="123456" label={"Password"} onChange={(e) => setPassword(e.target.value)}/>
                <div className="pt-4">
                    <Button label={"Sign in"} onClick={handleSignin}/>
                </div>
                <BottomWarning label={"Don't have an account? "} buttonText={"Sign up"} to={"/signup"}/>
            </div>
        </div>
    </div>
}