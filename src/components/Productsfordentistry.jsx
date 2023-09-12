import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";

import { FiChevronLeft, FiCornerRightUp } from "react-icons/fi";
import { RiCheckFill } from "react-icons/ri";

import Videotooth from "../img/Fordentistry/Video2-1-1.mp4";
import Img211 from "../img/Fordentistry/Img2.1.1.jpg";
import Img2111 from "../img/Fordentistry/Img2.1.1.1.png";

import Img212 from "../img/Fordentistry/Img2.1.2.jpg";
import Img2121 from "../img/Fordentistry/Img2.1.2.1.jpg";
import Img213 from "../img/Fordentistry/Img2.1.3.jpg";
import IMG6503 from "../video/IMG6503.mp4";

function Productsfordentistry({ yScroll }) {
  const navigate = useNavigate();
  return (
    <>
      <main>
        <div className="relative cursor-auto inline-block align-middle mx-0 my-auto z-9 text-left w-full ">
          <div className=" opacity-100 translate-y-0 rotate-0">
            <div className="relative animate-flip-up animate-ease-out pt-[70px] pr-0 pb-[50px] xl:pt-[69px] xl:pb-[100px] 2xl:pt-[100px] 2xl:pb-[69px] z-9 bg-white">
              <div
                className=" cursor-pointer w-full sticky top-[77.75px] mb-[20px]  bg-white/80  z-10"
                onClick={() => navigate("/products")}
              >
                <div className="flex items-center justify-end text-xl px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1094px]">
                  <p className="text-[1rem]">к продукции</p>
                  <FiCornerRightUp />
                </div>
              </div>
              <div className=" w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1094px] mt-[20px]">
                <h1 className="mt-0 mr-auto mb-[1.07em] max-w-[996px] text-2xl lg:text-4xl">
                  Материалы и продукция для стомотолгии
                </h1>
                <h2 className="mx-0 mt-0 mb-[10px]  md:mb-[28px] lg:mb-[28px] xl:mb-[28px] 2xl:mb-[28px] text-[1.3rem] lg:text-[1.5rem]">
                  Дентальные импланты
                </h2>
                <div className="mx-auto max-w-none my-0 xl:max-w-[886px] 2xl:max-w-[886px] ">
                  <p className="mb-[1.2em] mt-0 text-base">
                    НПК МЕДПРОМЛАБ предлагает собственную разработку имплантатов
                    которые отличаются высоким качеством и большим разнообразием
                    моделей, протоколов и имплантационных систем. Благодаря
                    специальной форме резьбы, достигается надежная первичная
                    стабилизация, что позволяет сразу устанавливать временный
                    протез. Имплантатов НПК МЕДПРОМЛАБ можно устанавливать сразу
                    после удаления разрушенных зубов.
                  </p>
                  <p className="text-base">
                    Основное отличие нашей продукции от конкурентов: поверхность
                    внутрикостной части дентальных имплантатов обрабатывается
                    биоинертной окисью алюминия, в состав которого входят нано
                    частицы материала разработанного по запатентованной
                    технологии НПК МЕДПРОМЛАБ. На поверхность дентальных
                    имплантатов наносится биоактивное покрытие TiО2 c
                    кристаллической структурой анатаз.
                  </p>
                </div>
                <div className="relative flex flex-row-reverse flex-wrap items-center my-[40px] mx-0 lg:mt-[76px] lg:mb-[45px] xl:mt-[76px] xl:mb-[45px] lg:py-[63px] xl:py-[63px] 2xl:py-[63px] lg:before:right-auto lg:before:left-0 lg:before:content-[''] lg:before:absolute lg:before:top-0 lg:before:w-[72%] lg:before:h-full lg:before:bg-teal-300/75 lg:before:will-change-auto">
                  <div className="relative w-full mt-0 mr-0 ml-0 mb-[30px] lg:w-[46.4%] lg:m-0 xl:w-[46.4%] xl:m-0 2xl:w-[46.4%] 2xl:m-0 3xl:w-[46.4%] 3xl:m-0">
                    <div className="relative max-w-[505px] mx-auto my-0">
                      <div className="shadow-[0px_31.3px_71.1px_rgba(0,0,0,0.1)]">
                        <img
                          className="w-full h-full object-cover"
                          src={Img2111}
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative w-full lg:w-[53.6%]  max-[991px]:before:right-auto max-[991px]:before:left-0 max-[991px]:before:content-[''] max-[991px]:before:absolute max-[991px]:before:top-0 max-[991px]:before:w-full max-[991px]:before:h-full max-[991px]:before:bg-slate-200 max-[991px]:before:will-change-auto">
                    <div className=" relative p-[30px] lg:py-0 lg:px-[50px] xl:py-0 xl:pr-[101px] xl:pl-[92px] 2xl:py-0 2xl:pr-[101px] 2xl:pl-[92px] 3xl:py-0 3xl:pr-[101px] 3xl:pl-[92px]">
                      <p className=" text-emerald-950">
                        Свойства данного покрытия обеспечивают улучшение
                        остеоинтеграции, уменьшают вероятность осложнений и, тем
                        самым, расширяют спектр показаний к использованию
                        дентальных имплантатов. Физико-химические параметры
                        титановых дентальных имплантатов НПК МЕДПРОМЛАБ
                        показали, что твердость титанового сплава, из которого
                        они состоят, не уступает иностранным аналогам.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="max-w-none my-0 mx-auto xl:max-w-[886px] 2xl:max-w-[886px] 3xl:max-w-[886px] mb-[2rem]">
                  <p className="mb-0">
                    Сравнения были проведены с продукцией лидеров рынка, таких
                    как: Nobel Biocare и Straumann (Швейцария), Astra Tech
                    (Швеция), IMPRO (Германия), Osstem (Южная Корея) – все они
                    имеют близкие показатели твердости (соответственно: 262
                    HV10, 277 HV10, 291 HV10, 254 HV10, 246 HV10). Различия по
                    твердости оказались статистически незначимыми, что
                    подтверждает высокое качество нашей продукции.
                  </p>
                  <p className="pt-[1rem]">
                    *Имеются противопоказания необходимо проконсультироваться со
                    специалистом.
                  </p>
                </div>
                <div className="max-w-none my-0 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1094px]">
                  <h2 className="mx-0 mt-0 mb-[10px]  md:mb-[28px] lg:mb-[28px] xl:mb-[28px] 2xl:mb-[28px] text-[1rem] lg:text-[1.3rem]">
                    Протокол имплантации
                  </h2>
                  <div className="max-w-none my-0 mx-auto mb-[2rem] xl:max-w-[886px] 2xl:max-w-[886px] 3xl:max-w-[886px">
                    <ReactPlayer
                      url={IMG6503}
                      width="100%"
                      height="100%"
                      controls
                    />
                  </div>
                </div>
                <h2 className="mx-0 mt-0 mb-[10px]  md:mb-[28px] lg:mb-[28px] xl:mb-[28px] 2xl:mb-[28px] text-[1.3rem] lg:text-[1.5rem]">
                  Пломбировочный материал
                </h2>
                <div className="mx-auto max-w-none my-0 xl:max-w-[886px] 2xl:max-w-[886px] ">
                  <p className="mb-[1.2em] mt-0 text-base">
                    Стоматологические материалы НПК МЕДПРОМЛАБ по всем
                    параметрам и свойствам соответствует лучшим образцам
                    пломбировочных материалов, представленных на российском
                    рынке. Основные свойства и преимущества композиционных
                    материалов световой полимеризации НПК «МЕДПРОМЛАБ»:
                  </p>
                  <p className="text-base"></p>
                </div>
                <div className="relative flex flex-row flex-wrap items-center my-[40px] mx-0 lg:mt-[76px] lg:mb-[45px] xl:mt-[76px] xl:mb-[45px] lg:py-[63px] xl:py-[63px] 2xl:py-[63px] lg:before:right-0 lg:before:content-[''] lg:before:absolute lg:before:top-0 lg:before:w-[72%] lg:before:h-full lg:before:bg-slate-200 lg:before:will-change-auto">
                  <div className="relative w-full mt-0 mr-0 ml-0 mb-[30px] lg:w-[46.4%] lg:m-0 xl:w-[46.4%] xl:m-0 2xl:w-[46.4%] 2xl:m-0 3xl:w-[46.4%] 3xl:m-0">
                    <div className="relative max-w-[505px] mx-auto my-0">
                      <div className="shadow-[0px_31.3px_71.1px_rgba(0,0,0,0.1)]">
                        <img
                          src={Img2121}
                          className="w-full h-full object-cover
                          "
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative w-full lg:w-[53.6%] max-[991px]:before:right-0 max-[991px]:before:content-[''] max-[991px]:before:absolute max-[991px]:before:top-0 max-[991px]:before:w-full max-[991px]:before:h-full max-[991px]:before:bg-slate-200 max-[991px]:before:will-change-auto">
                    <div className=" relative text-emerald-950 p-[30px] lg:py-0 lg:px-[50px] xl:py-0 xl:pr-[101px] xl:pl-[92px] 2xl:py-0 2xl:pr-[101px] 2xl:pl-[92px] 3xl:py-0 3xl:pr-[101px] 3xl:pl-[92px]">
                      <li>
                        Биосовместимость - отсутствие раздражения пульпы и
                        слизистой оболочки полости рта;
                      </li>
                      <li>
                        Физические и оптические свойства, подобные твердым
                        тканям зуба нерастворимость в ротовой жидкости;
                      </li>
                      <li>
                        Скорая, глубокая и надежная полимеризация материала - в
                        течение 40 секунд способствует надежному отвердеванию
                        слоя материала толщиной от 2,0 до 7,0 мм;
                      </li>{" "}
                      <li>
                        Контролируемая полимеризация (в необходимый для врача
                        момент, после проведенного моделирования материала);
                      </li>
                      <li>
                        Улучшенная стабильность цвета по сравнению с материалами
                        химической полимеризации;
                      </li>
                      <li>Низкий уровень остаточных материлов;</li>
                      <li>Не требуют смешивания компонентов;</li>
                      <li>Низкая цена при преимальном качестве.</li>
                    </div>
                  </div>
                </div>
                <p className="mb-[30px] ml-0 md:mb-[46px] md:pt-[12px] md:pr-0 md:pb-[12px] md:pl-[48px] lg:mb-[46px] lg:pt-[12px] lg:pr-0 lg:pb-[12px] lg:pl-[48px] 2xl:mb-[46px] 2xl:-ml-[31px]">
                  TEXT TEXT TEXT TEXT TEXT TEXT{" "}
                </p>
                <div className="my-0 mx-auto max-w-[1030px]">
                  <h2 className="mx-0 mt-0 mb-[10px]  md:mb-[28px] lg:mb-[28px] xl:mb-[28px] 2xl:mb-[28px] text-[1.3rem] lg:text-[1.5rem]">
                    Медицинский инструмент
                  </h2>
                  <div className=" my-0 mx-auto max-w-[1030px]">
                    <div className="relative py-[70px] px-[15px] max-[991px]:py-[50px] before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-slate-200 before:will-change-auto before:text-left ">
                      <div className="relative  my-0 mx-auto max-w-none xl:max-w-[886px] 2xl:max-w-[886px] 3xl:max-w-[886px]">
                        <p className="mt-0 mb-[2em] max-[991px]:mb-[1.3em] text-emerald-950">
                          <span className="relative shadow-[0px_31.3px_71.1px_rgba(0,0,0,0.1)] max-w-[58%] float-right inline-block max-[991px]:block max-[991px]:w-[505px] max-[991px]:max-w-[100%] max-[991px]:mt:0 max-[991px]:mx-auto max-[991px]:mb-[1.3em] max-[991px]:float-none lg:mt-0 lg:-mr-[30px] lg:mb-[15px] lg:ml-[30px]">
                            <img
                              className="w-full h-full object-cover"
                              src={Img213}
                              alt="img"
                            />
                          </span>
                          Its a text Its a text Its a text Its a text Its a text
                          Its a text Its a text Its a text Its a text Its a text
                          Its a text Its a text Its a text Its a text Its a text
                          Its a text Its a text Its a text Its a text Its a text
                          Its a text Its a text
                        </p>
                        <p className="mt-0 mb-[2em] max-[991px]:mb-[1.3em] text-emerald-950">
                          Its a text Its a text Its a text Its a text Its a text
                          Its a text Its a text Its a text Its a text Its a text
                          Its a text Its a text Its a text Its a text Its a text
                          Its a text Its a text Its a text Its a text Its a text
                          Its a text Its a text
                        </p>
                        <p className="mt-0 mb-[2em] max-[991px]:mb-[1.3em] text-emerald-950">
                          Its a text Its a text Its a text Its a text Its a text
                          Its a text Its a text Its a text Its a text Its a text
                          Its a text Its a text Its a text Its a text Its a text
                          Its a text Its a text Its a text Its a text Its a text
                          Its a text Its a text
                        </p>
                        <p className="mt-0 mb-[2em] max-[991px]:mb-[1.3em] text-emerald-950">
                          Its a text Its a text Its a text Its a text Its a text
                          Its a text Its a text Its a text Its a text Its a text
                          Its a text Its a text Its a text Its a text Its a text
                          Its a text Its a text Its a text Its a text Its a text
                          Its a text Its a text
                        </p>
                      </div>
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

export default Productsfordentistry;
