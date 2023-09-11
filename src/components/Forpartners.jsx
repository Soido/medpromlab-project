import { Link } from "react-router-dom";
import DefaultCarousel from "./Corusel";
import Slider from "../Slider/Slider.jsx";

import IMG51 from "../img/Partners/Img5.1.jpg";
import IMG52 from "../img/Partners/Img5.2.jpg";
import IMG53 from "../img/Partners/Img5.3.jpg";
import IMG54 from "../img/Partners/Img5.4.jpg";
import IMG55 from "../img/Partners/Img5.5.jpg";
import IMG56 from "../img/Partners/Img5.6.jpg";
import IMG57 from "../img/Partners/Img5.7.jpg";
import IMG58 from "../img/Partners/Img5.8.jpg";
import IMG59 from "../img/Partners/Img5.9.jpg";
import IMG60 from "../img/Partners/Img5.10.jpg";
import IMG61 from "../img/Partners/Img5.11.jpg";

function Forpartners() {
  return (
    <>
      <main>
        <div className="relative cursor-auto inline-block align-middle mx-0 my-auto text-left w-full ">
          <div className=" opacity-100 translate-y-0 rotate-0">
            <div className="relative pt-[100px] pr-0 pb-[50px] xl:pt-[100px] xl:pb-[100px] 2xl:pt-[100px] 2xl:pb-[100px] bg-white">
              <div className="animate-flip-up animate-ease-out w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1094px]">
                <h1 className="mt-0 mr-auto mb-[1.07em] max-w-[996px] text-4xl">
                  Партнерам
                </h1>

                <div className="mx-auto max-w-none my-0 xl:max-w-[886px] 2xl:max-w-[886px]  mb-[3rem]">
                  <h2 className="mx-0 mt-0 mb-[10px]  md:mb-[28px] lg:mb-[28px] xl:mb-[28px] 2xl:mb-[28px] text-[1.3rem] lg:text-[1.5rem]">
                    Нам доверяют:
                  </h2>
                </div>
                <Slider>
                  <div className=" cursor-pointer flex items-center justify-center select-none w-full overflow-hidden">
                    <div className="flex items-center justify-center ">
                      <img className="w-full" src={IMG51} />
                    </div>
                    <div className="flex items-center justify-center my-auto py-auto">
                      <img className="h-full" src={IMG52} />
                    </div>
                  </div>
                  <div className="cursor-pointer flex items-center justify-center select-none w-full">
                    <div className="flex items-center justify-center my-auto py-auto">
                      <img className=" h-full" src={IMG53} />
                    </div>
                    <div className="flex items-center justify-center ">
                      <img className=" h-full" src={IMG54} />
                    </div>
                  </div>
                  <div className="cursor-pointer flex items-center justify-center select-none w-full">
                    {" "}
                    <div className="flex items-center justify-center ">
                      <img className="h-full " src={IMG55} />
                    </div>
                    <div className="w flex items-center justify-center ">
                      <img className="h-full" src={IMG56} />
                    </div>
                  </div>
                  <div className="cursor-pointer flex items-center justify-center select-none w-full">
                    {" "}
                    <div className=" flex items-center justify-center ">
                      <img className="h-full" src={IMG57} />
                    </div>
                    <div className=" flex items-center justify-center ">
                      <img className="h-full " src={IMG58} />
                    </div>
                  </div>
                  <div className="cursor-pointer flex items-center justify-center select-none w-full">
                    <div className=" flex items-center justify-center ">
                      <img className="h-full" src={IMG59} />
                    </div>
                    <div className=" flex items-center justify-center ">
                      <img className=" h-full" src={IMG60} />
                    </div>
                  </div>
                </Slider>

                <div className="nax-w-none my-0 mx-auto xl:max-w-[886px] 2xl:max-w-[886px] 3xl:max-w-[886px]">
                  <p className="mb-0">
                    ITS A TEXT ITS A TEXT ITS A TEXT ITS A TEXT ITS A TEXT ITS A
                    TEXT ITS A TEXT ITS A TEXT ITS A TEXT ITS A TEXT{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className=" bg-slate-500">
        <div className="pl-[5rem] mt-[6.5rem] pb-[2rem] text-white w-[100%] h-full text-left mb-0">
          <h3>
            Copyright 2023 Scientific production company LLC NPK MEDPROMLAB
          </h3>
          <p> Design and Development: Artem Surzhko</p>
        </div>
      </footer>
    </>
  );
}

export default Forpartners;
