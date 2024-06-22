import Link from "next/link";
import { Metadata } from "next";
import Signup from "@/components/Signup";

export const metadata: Metadata = {
  title: "Sign Up Page | ",
  description: "",
};

const SignupPage = () => {
  
  return (
    <>
      <Signup />
    </>
  );
};

export default SignupPage;