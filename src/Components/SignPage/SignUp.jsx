import React, { useRef } from "react";
import { useHistory } from "react-router";
import { useDefaultFocus, useFocus } from "../../Hooks/useFocus";
import { useInput } from "../../Hooks/useInput";
import { useShownContext } from "../../Hooks/context";
const SignUp = () => {
  const { setIsSigned } = useShownContext();
  const history = useHistory();
  const [firstName, firstNameBind, resetFirstName] = useInput();
  const [userName, userNameBind, resetUserName] = useInput();
  const [email, emailBind, resetEmail] = useInput();
  const [password, passwordBind, resetPassword] = useInput();
  const firstNameRef = useRef();
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  useFocus(firstNameRef);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (firstNameRef.current.value === "") |
      (firstNameRef.current.value === null)
    ) {
      return;
    }
    useDefaultFocus(userNameRef);
    if (
      (userNameRef.current.value === "") |
      (userNameRef.current.value === null)
    ) {
      return;
    }
    useDefaultFocus(emailRef);
    if ((emailRef.current.value === "") | (emailRef.current.value === null)) {
      return;
    }
    useDefaultFocus(passwordRef);
    if (
      (passwordRef.current.value === "") |
      (passwordRef.current.value === null)
    ) {
      return;
    }
    setIsSigned(true);
    resetFirstName();
    resetUserName();
    resetEmail();
    resetPassword();
    history.push(`/dashboard`);
  };

  return (
    <div className="w-screen flex items-center sm:p-0 p-4 justify-center bg-gray-300 min-h-screen lg:ml-[264px]">
      <div className="sm:w-[420px] w-full relative h-full flex flex-col px-8 py-4 sm:h-[550px] bg-white rounded-xl bg-opacity-40 backdrop-filter backdrop-blur-xl">
        <h3 className="py-4 text-3xl font-bold text-center text-gray-900">
          Sign Up
        </h3>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start w-full h-full space-y-10"
        >
          <input
            ref={firstNameRef}
            type="text"
            {...firstNameBind}
            placeholder="Type your Name"
            className="input"
            required
          />
          <input
            ref={userNameRef}
            type="text"
            {...userNameBind}
            placeholder="Type a userName"
            className="input"
            required
          />
          <input
            ref={emailRef}
            type="email"
            placeholder="Type an Email"
            className="input"
            {...emailBind}
            required
          />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Type a password"
            className="input"
            {...passwordBind}
            required
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
        <h3
          onClick={() => history.push("/sign-in")}
          className="py-4 text-sm font-semibold text-gray-700 transition-all duration-500 cursor-pointer hover:text-red-600"
        >
          You already have an account?
        </h3>
      </div>
    </div>
  );
};

export default SignUp;
