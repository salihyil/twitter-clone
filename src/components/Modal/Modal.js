import React from "react";

const Modal = ({ header, visible, children }) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-center p-5 border-b border-solid border-slate-200 rounded-t ">
              <button
                className="mr-3 p-2 bg-transparent border-0 text-black opacity-5   text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() =>
                  visible({
                    signUpModal: false,
                  })
                }
              >
                <span className="bg-transparent text-black  h-6 text-2xl block outline-none focus:outline-none">
                  X
                </span>
              </button>
              <h3 className="text-3xl font-semibold">{header}</h3>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">{children}</div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b"></div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
