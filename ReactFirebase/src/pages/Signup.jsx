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

const auth = getAuth(app);

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password);
    alert("User Sucessfully Registered");
  };

  return (
    <div className="signup-page dark bg-slate-900 h-[100vh] content-center">
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
          <Button variant="outline">Login</Button>
          </div>
          <div className="flex flex-col text-xs  space-y-1 ">
            <label htmlFor="login">Create a new accont.</label>
            <Button onClick={createUser}>Signup</Button>
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
