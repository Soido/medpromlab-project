import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Button from "../UX/UI/Button";

import Eximg from "../img/Eximg.jpg";

import Img251 from "../img/opticalmaterial/Img2.5.1.jpg";
import Img221 from "../img/dentalcare/Img2.2.1.jpg";
import Img231 from "../img/Equipment/Img2.3.1.png";
import EximgTwo from "../img/Eximg2.jpg";
import EximgThree from "../img/Eximg3.jpg";
import EximgFour from "../img/Eximg4.jpg";

function Products({ yScroll }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative cursor-auto inline-block align-middle mx-0 my-auto z-9 text-left w-full ">
        <div className=" opacity-100 translate-y-0 rotate-0">
          <div className="relative pt-[100px] pr-0 pb-[50px] xl:pt-[100px] xl:pb-[100px] 2xl:pt-[100px] 2xl:pb-[100px] z-9 bg-white">
            <div className="animate-flip-up animate-ease-out pr-0 pb-[70px] lg:pb-[140px] block">
              <div className="max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1094px] mx-auto w-full pr-[15px] pl-[15px]">
                <h1 className="mt-0 mr-auto mb-[1.07em] max-w-[996px] text-4xl">
                  Продукция
                </h1>
                <div className="max-w-none lg:max-w-[886px] mx-auto my-0 mb-[50px]">
                  <div>
                    <p
                      className={`mt-[2rem] leading-snug tracking-wide text-left text-[0.9rem] lg:text-[1.1rem] text-black`}
                    >
                      Ниже представленны группы продукции и материалов НПК
                      МЕДПРОМЛАБ
                    </p>
                  </div>
                </div>
                <ul className="flex flex-wrap my-0 -mx-[15px] lg:-mx-[40px] list-none p-0">
                  <li className="w-[100%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] py-0 px-[15px] lg:p-[34px] xl:p-[34px] 2xl:p-[34px]">
                    <div
                      className=" cursor-pointer p-[40px] md:p-[70px] lg:pr-[56px] lg:pt-[60] lg:pl-[66px] lg:mb-[30px] xl:mb-[43px] 2xl:mb-[43px] mt-0 mr-auto mb-[40px] relative text-white h-[385px]"
                      onClick={() => navigate("/products/productsfordentistry")}
                    >
                      <div className="absolute left-0 top-0 w-[100%] h-[100%] bg-no-repeat bg-center bg-cover visible">
                        <img
                          className="h-full w-full object-cover"
                          src={EximgTwo}
                          alt="img"
                        />
                      </div>
                      <div className="absolute  w-[100%] h-[100%]  left-0 top-0 flex justify-center items-center">
                        <div className="block sm: w-[90%] h-[90%] lg:w-[87%] lg:h-[87%] border-2 "></div>
                      </div>
                      <div className="relative flex flex-col h-[100%] justify-around visible  text-black">
                        <h2 className="lg:text-lg text-left text-black m-0">
                          Материалы и продукция для стомотолгии
                        </h2>
                        <p className=" lg:text-lg  text-left">
                          Дентальные импланты
                          <br />
                          Пломбировочный материал
                          <br />
                          Медицинский инструмент
                        </p>
                        <span className="relative inline-block text-left w-[60%] lg:text-lg">
                          <Button />
                        </span>
                      </div>
                    </div>

                    <div
                      className="cursor-pointer p-[40px] md:p-[70px] lg:pr-[56px] lg:pt-[60] lg:pl-[66px] lg:mb-[30px] xl:mb-[43px] 2xl:mb-[43px] mt-0 mr-auto mb-[40px] relative text-white h-[385px]"
                      onClick={() => navigate("/products/dentalcare")}
                    >
                      <div className="absolute left-0 top-0 w-[100%] h-[100%] bg-no-repeat bg-center bg-cover visible">
                        <img
                          className="h-full w-full object-cover"
                          src={Img221}
                          alt="img"
                        />
                      </div>
                      <div className="absolute  w-[100%] h-[100%]  left-0 top-0 flex justify-center items-center">
                        <div className="block sm: w-[90%] h-[90%] lg:w-[87%] lg:h-[87%] border-2"></div>
                      </div>
                      <div className="relative flex flex-col h-[100%] justify-around visible  text-black">
                        <h2 className="lg:text-lg text-left text-black m-0">
                          Средства гигиены полости рта
                        </h2>
                        <p className=" lg:text-lg  text-left">
                          Здесь будет текст Здесь будет текст Здесь будет текст
                          Здесь будет текст Стиль шрифта не подбирался Стиль
                          шрифта не подбирался
                        </p>
                        <span className="lg:text-lg relative inline-block text-black text-left w-[60%]">
                          <Button />
                        </span>
                      </div>
                    </div>
                    <div
                      className="cursor-pointer p-[40px] md:p-[70px] lg:pr-[56px] lg:pt-[60] lg:pl-[66px] lg:mb-[30px] xl:mb-[43px] 2xl:mb-[43px] mt-0 mr-auto mb-[40px] relative text-white h-[385px]"
                      onClick={() => navigate("/products/rehabilitation")}
                    >
                      <div className="absolute left-0 top-0 w-[100%] h-[100%] bg-no-repeat bg-center bg-cover visible">
                        <img
                          className="h-full w-full object-cover"
                          src={Img231}
                          alt="img"
                        />
                      </div>
                      <div className="absolute  w-[100%] h-[100%]  left-0 top-0 flex justify-center items-center">
                        <div className="block sm: w-[90%] h-[90%] lg:w-[87%] lg:h-[87%] border-2"></div>
                      </div>
                      <div className="relative flex flex-col h-[100%] justify-around visible">
                        <h2 className="lg:text-lg text-left text-black m-0">
                          Технические средства реабилитации (ТСР)
                        </h2>
                        <p className="lg:text-lg  text-black  text-left">
                          Здесь будет текст Здесь будет текст Здесь будет текст
                          Здесь будет текст Стиль шрифта не подбирался Стиль
                          шрифта не подбирался
                        </p>
                        <span className="relative lg:text-lg  inline-block  text-black text-left w-[60%]">
                          <Button />
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="w-[100%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] py-0 px-[15px] lg:p-[34px] xl:p-[34px] 2xl:p-[34px]">
                    <div
                      className="cursor-pointer p-[40px] md:p-[70px] lg:pt-[61px] lg:pr-[56px] lg:pl-[66px] lg:mb-[30px] xl:mb-[43px] 2xl:mb-[43px] mt-0 mr-auto mb-[40px] relative text-white h-[385px]"
                      onClick={() => navigate("/products/diagnosticequipment")}
                    >
                      <div className="absolute left-0 top-0 w-[100%] h-[100%] bg-no-repeat bg-center bg-cover visible">
                        <img
                          className="h-full w-full object-cover"
                          src={EximgFour}
                          alt="img"
                        />
                      </div>
                      <div className="absolute  w-[100%] h-[100%]  left-0 top-0 flex justify-center items-center">
                        <div className="block sm: w-[90%] h-[90%] lg:w-[87%] lg:h-[87%] border-2"></div>
                      </div>
                      <div className="relative flex flex-col h-[100%] justify-around visible">
                        <h2 className="lg:text-lg text-left text-black m-0">
                          Оборудование
                        </h2>
                        <p className=" lg:text-lg  text-black text-left">
                          Здесь будет текст Здесь будет текст Здесь будет текст
                          Здесь будет текст Стиль шрифта не подбирался Стиль
                          шрифта не подбирался
                        </p>
                        <span className="relative  lg:text-lg inline-block text-black text-left w-[60%]">
                          Подробнее
                        </span>
                      </div>
                    </div>
                    <div
                      className="cursor-pointer p-[40px] md:p-[70px] lg:pt-[61px] lg:pr-[56px] lg:pl-[66px] lg:mb-[30px] xl:mb-[43px] 2xl:mb-[43px] mt-0 mr-auto mb-[40px] relative text-white h-[385px]"
                      onClick={() => navigate("/products/opticalmaterial")}
                    >
                      <div className="absolute left-0 top-0 w-[100%] h-[100%] bg-no-repeat bg-center bg-cover visible">
                        <img
                          className="h-full w-full object-cover"
                          src={Img251}
                          alt="img"
                        />
                      </div>
                      <div className="absolute  w-[100%] h-[100%]  left-0 top-0 flex justify-center items-center">
                        <div className="block w-[90%] h-[90%] lg:w-[87%] lg:h-[87%] border-2"></div>
                      </div>
                      <div className="relative flex flex-col h-[100%] justify-around visible">
                        <h2 className="lg:text-lg text-left text-black m-0">
                          Оптический материал
                        </h2>
                        <p className="lg:text-lg  text-black text-left">
                          Здесь будет текст Здесь будет текст Здесь будет текст
                          Здесь будет текст Стиль шрифта не подбирался Стиль
                          шрифта не подбирался
                        </p>
                        <span className="relative lg:text-lg  text-black inline-block text-left w-[60%]">
                          Подробнее
                        </span>
                      </div>
                    </div>
                    <div
                      className="cursor-pointer p-[40px] md:p-[70px] lg:pt-[61px] lg:pr-[56px] lg:pl-[66px] lg:mb-[30px] xl:mb-[43px] 2xl:mb-[43px] mt-0 mr-auto mb-[40px] relative text-white h-[385px]"
                      onClick={() =>
                        navigate("/products/terumoandgoreexcluder")
                      }
                    >
                      <div className="absolute left-0 top-0 w-[100%] h-[100%] bg-no-repeat bg-center bg-cover visible">
                        <img
                          className="h-full w-full object-cover"
                          src={EximgThree}
                          alt="img"
                        />
                      </div>
                      <div className="absolute  w-[100%] h-[100%]  left-0 top-0 flex justify-center items-center">
                        <div className="block w-[90%] h-[90%] lg:w-[87%] lg:h-[87%] border-2"></div>
                      </div>
                      <div className="relative flex flex-col h-[100%] justify-around visible">
                        <h2 className="lg:text-lg text-left text-black m-0">
                          Продукция компаний TERUMO и GORE EXCLUDER
                        </h2>
                        <p className="text-sm lg:text-lg  text-black text-left">
                          Здесь будет текст Здесь будет текст Здесь будет текст
                          Здесь будет текст Стиль шрифта не подбирался Стиль
                          шрифта не подбирался
                        </p>
                        <span className="relative lg:text-lg  text-black inline-block text-left w-[60%]">
                          Подробнее
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
