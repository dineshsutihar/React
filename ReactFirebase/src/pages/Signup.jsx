// shadcn  start

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


// shadcn end

import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { Link } from "react-router-dom";

const auth = getAuth(app);

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userData)=>{
      console.log(userData)
      alert("Sucessfully Created a Account")
    })
    .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        alert(`Error: ${error.code} and ${error.message}`)
    });
  };

  return (
    <div className="signup-page dark bg-slate-900 min-h-[85vh] content-center">
      <Card className="w-[400px] ml-auto mr-auto">

        <CardHeader>
          <CardTitle>Create New Account</CardTitle>
          <CardDescription>
            Create a new account in just simple steps
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email</Label>
                <Input
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  placeholder="Enter you email address"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Enter you password"
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex flex-col text-xs  space-y-1">
          <label htmlFor="login">Already have an account?</label>
          <Link to="/signin"><Button variant="outline">Login</Button></Link>
          </div>
          <div className="flex flex-col text-xs  space-y-1 ">
            <label htmlFor="signup">Create a new accont.</label>
            <Button onClick={createUser} id="signup">Signup</Button>
          </div>
          
        </CardFooter>
      </Card>

      {/* Old Data */}
      {/* <div>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        id="email"
        required
        placeholder="Enter your email here"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required
        placeholder="Enter your password here"
      />
      <button onClick={createUser}>Signup</button>
      </div> */}
    </div>
  );
};

export default SignupPage;
