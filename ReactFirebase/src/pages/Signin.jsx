
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

import { Link } from "react-router-dom";


import { useState } from "react";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userData)=>console.log(userData))
    .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        alert(`Error: ${error.code} and ${error.message}`)
    });
  };

  return (
    <div className="signup-page dark bg-slate-900 h-[85vh] content-center">
      <Card className="w-[400px] ml-auto mr-auto">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Fill the details to login.
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
          <div className="flex flex-col text-xs  space-y-1 ">
            <label htmlFor="login">Don&apos;t have an account?</label>
            <Link to="/signup"><Button variant="outline">Signup</Button></Link>
          </div>
          <div className="flex flex-col text-xs  space-y-1">
            <label htmlFor="login">Click the below button to</label>
          <Button >Login</Button>
          </div>
          
        </CardFooter>
      </Card>

    </div>
  );
};

export default SigninPage;
