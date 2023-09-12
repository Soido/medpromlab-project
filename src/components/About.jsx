import { Link } from "react-router-dom";

import { FiTrendingUp, FiCalendar } from "react-icons/fi";

import avatar from "../img/avatar.png";
import IMG6455 from "../video/IMG6455.mp4";
import Eximg from "../img/Eximg.jpg";
import EximgTwo from "../img/Eximg2.jpg";
import EximgThree from "../img/Eximg3.jpg";
import EximgFour from "../img/Eximg4.jpg";

function Implants({ yScroll }) {
  return (
    <>
      <main>
        <div className="relative cursor-auto inline-block align-middle mx-0 my-auto text-left w-full ">
          <div className=" opacity-100 translate-y-0 rotate-0">
            <div className="relative pt-[100px] pr-0 pb-[50px] xl:pt-[100px] xl:pb-[100px] 2xl:pt-[184px] 2xl:pb-[100px] bg-white">
              <div className="animate-flip-up animate-ease-out w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1094px]">
                <h1 className="mt-0 mr-auto mb-[1.07em] max-w-[996px] text-4xl">
                  О компании
                </h1>
                <div className="mx-auto max-w-none my-0 xl:max-w-[886px] 2xl:max-w-[886px] ">
                  <p className="mb-[1.2em] mt-0 text-base">
                    НПК МЕДПРОМЛАБ - резидент ОЭЗ ТВТ ДУБНА
                    <br />
                    Осноные виды деятельности: разработка, производство и
                    продажа медико-инструментальной продукции
                  </p>
                </div>
                <div className="relative flex flex-row flex-wrap items-center my-[40px] mx-0 lg:mt-[76px] lg:mb-[45px] xl:mt-[76px] xl:mb-[45px] lg:py-[63px] xl:py-[63px] 2xl:py-[63px] lg:before:right-0 lg:before:content-[''] lg:before:absolute lg:before:top-0 lg:before:w-[72%] lg:before:h-full lg:before:bg-blue-950 lg:before:will-change-auto">
                  <div className="relative w-full mt-0 mr-0 ml-0 mb-[30px] lg:w-[46.4%] lg:m-0 xl:w-[46.4%] xl:m-0 2xl:w-[46.4%] 2xl:m-0 3xl:w-[46.4%] 3xl:m-0">
                    <div className="relative max-w-[505px] mx-auto my-0">
                      <div className="shadow-[0px_31.3px_71.1px_rgba(0,0,0,0.1)]">
                        <video
                          className=" w-full h-full object-cover object-left"
                          autoPlay
                          loop
                          muted
                        >
                          <source src={IMG6455} type="video/mp4 " />
                        </video>
                      </div>
                      <div className="absolute -right-[20px] -bottom-[50px] w-[185px] h-[185px] rounded-full overflow-hidden  max-[991px]:relative max-[991px]:right-auto max-[991px]:top-auto max-[991px]:bottom-auto max-[991px]:left-auto max-[991px] max-[991px]:w-[150px] max-[991px]:h-[150px] max-[991px]:mx-auto max-[991px]:mt-[10px] max-[991px]:-mb-[50px] max-[992px]:z-10">
                        <img
                          className="w-full h-full object-cover"
                          src={avatar}
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative w-full lg:w-[53.6%] max-[991px]:before:right-0 max-[991px]:before:content-[''] max-[991px]:before:absolute max-[991px]:before:top-0 max-[991px]:before:w-full max-[991px]:before:h-full max-[991px]:before:bg-blue-950 max-[991px]:before:will-change-auto">
                    <div className=" relative p-[30px] lg:py-0 lg:px-[50px] xl:py-0 xl:pr-[101px] xl:pl-[92px] 2xl:py-0 2xl:pr-[101px] 2xl:pl-[92px] 3xl:py-0 3xl:pr-[101px] 3xl:pl-[92px]">
                      <p className=" text-white">
                        <em>
                          " Наша цель войти в топ-100 компаний России по
                          производству медико-инструментальной продукции до 2030
                          года. "
                        </em>{" "}
                      </p>
                      <div className="flex justify-end">
                        <p className=" pt-[1.5rem] text-white">
                          Генеральный директор компании
                          <br />
                          Волков Сергей
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex  items-center ">
                  <div className="mb-[28px] text-[2rem] pr-[1rem]">
                    <FiTrendingUp />
                  </div>

                  <h2 className="mx-0 mt-0 mb-[10px]  md:mb-[28px] lg:mb-[28px] xl:mb-[28px] 2xl:mb-[28px] text-[1.5rem]">
                    Cтратегия развития
                  </h2>
                </div>
                <p className="mb-[30px] ml-0 md:mb-[46px] md:pt-[12px] md:pr-0 md:pb-[12px] md:pl-[48px] lg:mb-[46px] lg:pt-[12px] lg:pr-0 lg:pb-[12px] lg:pl-[48px] 2xl:mb-[46px] 2xl:-ml-[31px]">
                  Стратегия компании направлена на производство продукции
                  высокого качества, охват сегмента рынка, который занимали
                  ушедшие из России иностранные компании. Наша продукция не
                  уступают по качеству лучшим иностранным аналогам. Развитие
                  Российских НИОКР и локализации производства на территории РФ.
                  Важным направлением компании является развитие сотрудничества
                  с государственными и частными медицинскими учреждениями.{" "}
                </p>
                <div className="relative flex flex-row-reverse flex-wrap items-center my-[40px] mx-0 lg:mt-[76px] lg:mb-[45px] xl:mt-[76px] xl:mb-[45px] lg:py-[63px] xl:py-[63px] 2xl:py-[63px] lg:before:right-auto lg:before:left-0 lg:before:content-[''] lg:before:absolute lg:before:top-0 lg:before:w-[72%] lg:before:h-full lg:before:bg-blue-950 lg:before:will-change-auto">
                  <div className="relative w-full mt-0 mr-0 ml-0 mb-[30px] lg:w-[46.4%] lg:m-0 xl:w-[46.4%] xl:m-0 2xl:w-[46.4%] 2xl:m-0 3xl:w-[46.4%] 3xl:m-0">
                    <div className="relative max-w-[505px] mx-auto my-0">
                      <div className="shadow-[0px_31.3px_71.1px_rgba(0,0,0,0.1)]">
                        <img
                          className="w-full h-full object-cover"
                          src={EximgThree}
                          alt="img"
                        />
                      </div>
                      <div className="absolute -left-[20px] -bottom-[50px] w-[185px] h-[185px] rounded-full overflow-hidden  max-[991px]:relative max-[991px]:right-auto max-[991px]:top-auto max-[991px]:bottom-auto max-[991px]:left-auto max-[991px] max-[991px]:w-[150px] max-[991px]:h-[150px] max-[991px]:mx-auto max-[991px]:mt-[10px] max-[991px]:-mb-[50px] max-[992px]:z-10">
                        <img
                          className="w-full h-full object-cover"
                          src={avatar}
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative w-full lg:w-[53.6%]  max-[991px]:before:right-auto max-[991px]:before:left-0 max-[991px]:before:content-[''] max-[991px]:before:absolute max-[991px]:before:top-0 max-[991px]:before:w-full max-[991px]:before:h-full max-[991px]:before:bg-blue-950 max-[991px]:before:will-change-auto">
                    <div className=" relative p-[30px] lg:py-0 lg:px-[50px] xl:py-0 xl:pr-[101px] xl:pl-[92px] 2xl:py-0 2xl:pr-[101px] 2xl:pl-[92px] 3xl:py-0 3xl:pr-[101px] 3xl:pl-[92px]">
                      <p className=" text-white">
                        <em>
                          "Наш проект позволяет существенно снизить стоимость
                          медико-инстурментальной продукции и сделать ее
                          доступной для конечного потребителяю."
                        </em>
                      </p>
                      <div className="flex justify-end">
                        <p className=" pt-[1.5rem] text-white">
                          Коммерческий директор
                          <br />
                          Гаврюков Станислав
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nax-w-none my-0 mx-auto xl:max-w-[886px] 2xl:max-w-[886px] 3xl:max-w-[886px]">
                  <p className="mb-0">
                    Общий объем инвестиций в проект составит более 280 миллионов
                    рублей, при этом на предприятии будет создано свыше 150
                    новых рабочих мест.{" "}
                  </p>
                </div>

                <p className="mb-[30px] ml-0 md:mb-[46px] md:pt-[12px] md:pr-0 md:pb-[12px] md:pl-[48px] lg:mb-[46px] lg:pt-[12px] lg:pr-0 lg:pb-[12px] lg:pl-[48px] 2xl:mb-[46px] 2xl:-ml-[31px]">
                  {" "}
                </p>
                <div className="flex items-center">
                  <div className="mb-[28px] text-[2rem] pr-[1rem]">
                    <FiCalendar />
                  </div>
                  <h3 className="mx-0 mt-0 mb-[10px]  md:mb-[28px] lg:mb-[28px] xl:mb-[28px] 2xl:mb-[28px] text-[1.5rem]">
                    История компании и значемые даты
                  </h3>
                </div>
                <div className=" my-0 mx-auto ">
                  <div className="relative py-[70px] px-[15px] max-[991px]:py-[50px] before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-blue-200  before:will-change-auto before:text-left ">
                    <div className="relative my-0 mx-auto max-w-none xl:max-w-[886px] 2xl:max-w-[886px] 3xl:max-w-[886px]">
                      <p className="mt-0 mb-[2em] max-[991px]:mb-[1.3em]">
                        <span className="relative shadow-[0px_31.3px_71.1px_rgba(0,0,0,0.1)] max-w-[58%] float-right inline-block max-[991px]:block max-[991px]:w-[505px] max-[991px]:max-w-[100%] max-[991px]:mt:0 max-[991px]:mx-auto max-[991px]:mb-[1.3em] max-[991px]:float-none lg:mt-0 lg:-mr-[30px] lg:mb-[15px] lg:ml-[30px]">
                          <img
                            className="w-full h-full object-cover"
                            src={Eximg}
                            alt="img"
                          />
                        </span>
                        В 2020 году началсь реализовация проекта строительства
                        высокотехнологичного предприятия, основным направлением
                        деятельности которого будет производство
                        медико-инструментальной продукции. Проведен анализ
                        площадок для строительства завода.
                      </p>
                      <p className="mt-0 mb-[2em] max-[991px]:mb-[1.3em]">
                        В июле 2022 года было заключено соглашение об
                        осуществлении промышленно-производственной деятельности
                        на территории ОЭЗ ТВТ ДУБНА, благодаря поддержке органов
                        исполнительной власти, в лице заместителя председателя
                        правительства Московской области Зиновьевой Екатерины
                        Андреевны и руководства ОЭЗ.
                      </p>
                      <p className="mt-0 mb-[2em] max-[991px]:mb-[1.3em]">
                        В период с августа по октябрь 2022 года НПК МЕДПРОМЛАБ
                        получило свидетельство, удостоверяющее регистрацию
                        компании в качестве резидента ОЭЗ и подписан договор
                        аренды земельного участка на территории ОЭЗ.
                      </p>
                      <p className="mt-0 mb-[2em] max-[991px]:mb-[1.3em]">
                        В 2023 году были завершены проектные работы
                        производственно-складского комплекса общей площадью 1
                        440 000 кв.м и подписано соглашение о сотрудничестве и
                        передачи технологий с компанией "SHANGHAI TANDA
                        INVESTMENT" Co Ltd., крупнейшим в Китае производителем
                        медицинского оборудования и расходных материалов.
                      </p>
                      <p className="mt-0 mb-[2em] max-[991px]:mb-[1.3em]">
                        Продолжение следует
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className=" bg-slate-500">
        <div className="pl-[5rem]  text-white w-[100%] h-[70px] text-left mb-0">
          <h3>
            Copyright 2023 Scientific production company LLC NPK MEDPROMLAB
          </h3>
          <p> Design and Development: Artem Surzhko</p>
        </div>
      </footer>
    </>
  );
}

export default Implants;
