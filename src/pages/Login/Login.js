import { useState } from "react";
import { AiFillApple } from "react-icons/ai";

import { ReactComponent as TwitterLogo } from "../../assets/svg/twitter-logo.svg";
import Button from "components/Button";
import SignUpModal from "components/SignUpModal";
import SignInModal from "components/SignInModal";

const Login = () => {
  const [showModal, setShowModal] = useState({
    signUpModal: false,
    signInModal: false,
  });

  const handleSignUpModal = (e) => {
    setShowModal({ signUpModal: true });
  };

  const handleSignInpModal = (e) => {
    setShowModal({ signInModal: true });
  };

  return (
    <>
      <div className="bg-logo-tw bg-cover bg-center flex-1 flex items-center justify-center">
        <TwitterLogo className=" fill-white max-h-[380px] h-1/2   " />
      </div>
      <div className="h-full p-4 ">
        <div className="h-full min-w-[45vw] p-5 flex flex-col">
          <TwitterLogo className="fill-[#1DA1F2] max-h-[380px] h-12  pb-3 self-start " />
          <div className=" leading-[84px]  text-[64px]  tracking-[-1.2px]  my-12 font-bold">
            Happening now
          </div>
          <div className="text-[31px] mb-8 leading-9 font-bold  ">
            Join Twitter today.
          </div>
          <div className="flex  flex-col  items-start">
            <div
              role="button"
              className="border border-[#CFD9DE] rounded-full w-[300px] flex flex-row justify-center items-center h-[40px] hover:bg-[#E6E6E6] font-bold"
              onClick={(e) => console.log("Clicked")}
              aria-pressed="false"
            >
              <AiFillApple className="mr-1" />
              <span>Sign up with Apple</span>
            </div>
            <div className="flex items-center my-2.5 mb-3.5 w-[300px]">
              <div className="h-px bg-gray-300 flex-1" />
              <span className="px-4 text-[13px] text-gray-500 font-semibold">
                or
              </span>
              <div className="h-px bg-gray-300 flex-1" />
            </div>
            <Button
              id="signup"
              textColor={"text-white"}
              bgColor={"bg-[#1D9BF0]"}
              hoverBgColor={"hover:bg-sky-600"}
              type="button"
              onClick={handleSignUpModal}
            >
              Sign up with phone or email
            </Button>
            <div className="text-[11px] leading-3 text w-[300px] mb-5 font-normal">
              By signing up, you agree to the{" "}
              <a href="##" className="text-[#1D9BF9]">
                Terms of Service{" "}
              </a>
              and{" "}
              <a href="##" className="text-[#1D9BF9]">
                Privacy Policy{" "}
              </a>
              , including{" "}
              <a href="##" className="text-[#1D9BF9]">
                Cookie Use.
              </a>
              <div className="flex mt-10 flex-col">
                <div className="font-bold text-[17px] ">
                  Already have an account?
                </div>

                <Button
                  id="signin"
                  textColor={"text-blue-400"}
                  bgColor={"bg-white"}
                  hoverBgColor={"hover:bg-blue-50"}
                  type="button"
                  onClick={handleSignInpModal}
                >
                  Sign in
                </Button>

                {showModal.signUpModal && (
                  <SignUpModal visible={setShowModal} />
                )}

                {showModal.signInModal && (
                  <SignInModal visible={setShowModal} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
