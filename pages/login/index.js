import { useState } from "react";
import Container from "../../components/uiComponents/Container";
import LoginGoogle from "../../components/GoogleLogin/GoogleLogin";

export default function Login() {
  return (
    <div>
      <Container>
        <div className="w-full flex place-items-center justify-center">
          <div className="p-4 border border-gray-400 rounded-lg w-full max-w-2xl">
            <p className="text-center text-2xl font-semibold">Login</p>
            <LoginGoogle />
          </div>
        </div>
      </Container>
    </div>
  );
}
