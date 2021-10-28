import { ArrowLeftIcon } from "@heroicons/react/solid";
import React, { useRef } from "react";
import { useHistory } from "react-router";
import { useShownContext } from "../../Hooks/context";
import { useDefaultFocus, useFocus } from "../../Hooks/useFocus";
import { useInput } from "../../Hooks/useInput";

const SignIn = () => {
  const { setIsSigned } = useShownContext();
  const history = useHistory();
  const [email, emailBind, resetEmail] = useInput();
  const [password, passwordBind, resetPassword] = useInput();
  const emailRef = useRef();
  const passwordRef = useRef();
  useFocus(emailRef);
  const handleSubmit = (e) => {
    e.preventDefault();
    if ((emailRef.current.value === "") | (emailRef.current.value === null))
      return;
    useDefaultFocus(passwordRef);
    if (
      (passwordRef.current.value === "") |
      (passwordRef.current.value === null)
    )
      return;
    setIsSigned(true);
    history.push("/dashboard");
  };
  return (
    <div className="w-screen flex items-center sm:p-0 justify-center bg-gray-300 min-h-screen lg:ml-[264px]">
      <div className="sm:w-[420px] w-full h-full flex flex-col px-8 py-6 sm:h-[340px] bg-white rounded-xl bg-opacity-40 backdrop-filter backdrop-blur-xl">
        <h3 className="py-4 text-3xl font-bold text-center text-gray-900">
          Sign In
        </h3>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full h-full mt-4 space-y-10"
        >
          <input
            ref={emailRef}
            type="email"
            {...emailBind}
            placeholder="Type an email"
            required
            className="input"
          />
          <input
            ref={passwordRef}
            type="password"
            required
            placeholder="Type your password"
            className="input"
            {...passwordBind}
          />
          <button type="submit" className="btn">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
