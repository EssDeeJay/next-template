import React from "react";

export default function ImageWithText(){
    return (
      <div>
        <div className="max-w-7xl mx-auto text-white py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="first-column text-left">
              <h2 className="text-3xl font-bold text-white lg:text-6xl capitalize mb-10">
                We are a Creative Digital Agency
              </h2>
              <p className="mt-4 text-base font-normal leading-[30px]">
                Dalio started with a vision for building an agency to solve the
                business problems of the future, and that requires a different
                model. We’re not a branding agency that dabbles in tech, and
                we’re not a development shop that leaves you hanging when it’s
                time to go to market.
              </p>
              <p className="mt-4 text-base font-normal leading-[30px]">
                We start with human experience and layer in technology and
                marketing to deliver truly integrated digital solutions. This
                unique set of capabilities sets us apart from other agencies and
                positions DIG to help you attack your goals.
              </p>
              <button className="px-6 py-4 bg-amber-300 text-slate-900 rounded-[30px] mt-4 font-semibold">
                Contact us{" "}
                <span className="inline-block text-center align-middle">
                  <img
                    src="/btn-up-arrow.svg"
                    alt="button-arrow-up"
                    className="w-5 h-5"
                  />
                </span>
              </button>
            </div>
            <div className="second-column mx-auto">
              <div className="grid grid-rows-2 gap-5 grid-flow-col justify-items-center">
                <img
                  src="https://via.placeholder.com/264x264"
                  alt="first-image"
                  className="object-cover rounded-tl-[50px] self-end"
                />
                <img
                  src="https://via.placeholder.com/220x220"
                  alt="second-image"
                  className="object-cover rounded-bl-[50px] self-start justify-self-end"
                />
                <img
                  src="https://via.placeholder.com/220x220"
                  alt="third-image"
                  className="object-cover rounded-tr-[50px] self-end justify-self-start"
                />
                <img
                  src="https://via.placeholder.com/264x264"
                  alt="fourth-image"
                  className="object-cover rounded-br-[50px] self-start"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}