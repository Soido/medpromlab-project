import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScroll } from 'react-use';
import bgvideo from '../video/bgvideo.mp4';
import Eximg from '../img/Eximg.jpg';
import EximgTwo from '../img/Eximg2.jpg';
import EximgThree from '../img/Eximg3.jpg';
import EximgFour from '../img/Eximg4.jpg';
import EximgFive from '../img/Eximg5.jpeg';

const Home = ({ yScroll }) => {
  const navigate = useNavigate();

  return (
    <>
      <main className="w-screen">
        <div className="relative flex md:min-h-full h-screen  min-h-full pt-[165px] pr-0 pb-[80px] md:pt-[165px] md:pr-0 md:pb-[80px] items-center overflow-hidden ">
          <div className="absolute top-0 left-0 right-0 w-screen h-screen overflow-hidden">
            <video
              className="absolute w-full h-full object-cover object-left"
              autoPlay
              loop
              muted
            >
              <source src={bgvideo} type="video/mp4 " />
            </video>
            <div className="absolute w-full h-full top-0 left-0 bg-white/50 z-8"></div>
          </div>
          <div className="relative w-[100%] pl-[15px] pr-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1094px] mx-auto animate-fade-up animate-ease-linear">
            <div className=" -mt-[5rem] md:-mt-[6rem] lg:-mt-[8rem] xl:-mt-[9rem] lg:mx-auto lg:my-0 lg:max-w-[886px]">
              <h1 className="mb-[3rem] leading-none tracking-wide text-black text-left text-[2.2rem] lg:text-[4.5rem] font-thin">
                МЕДПРОМЛАБ
              </h1>
              <p className="mt-[1rem] max-w-[665px] leading-snug tracking-wide text-left text-[1rem] lg:text-[1.2rem]">
                Работать на благо общества, создавать качественные и доступные
                медицинские изделия, материалы и продукцию,
                <br />
                способные помочь сохранить здоровье и улучшить качество жизней
                людей.{' '}
              </p>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 md:bottom-[2rem] pl-[15px] pr-[15px] w-[100%] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1094px] mx-auto">
            <div className=" mx-0 my-auto text-left">
              <button className="inline-block ml-[1rem] xl:ml-[5rem] p-0 w-[30px] h-[30px] border-0 text-black text-[1rem] lg:text-[1.5rem] animate-bounce">
                v
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className=" pt-[70px] pr-0 pb-[79px] lg:pt-[161px] block">
            <div className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1094px] w-[100%] pr-[15px] pl-[15px] mx-auto">
              <div className="max-w-none lg:mx-auto lg:my-0 lg:max-w-[886px]">
                <div className=" mt-[1rem] tracking-tight text-left text-black text-[1.1rem]">
                  <p
                    className={`${
                      yScroll > 288
                        ? 'animate-fade-up animate-ease-linear  text-black'
                        : 'text-white'
                    } leading-snug mt-[1rem] mb-[1rem] tracking-tight text-left text-[0.9rem] lg:text-[1.1rem]`}
                  >
                    Компания НПК «Медпромлаб» была зарегистрирована в 2021 году,
                    но ее история началась в 2019 году.
                    <br />
                    Группа инвесторов, в целях реализации приказа Министерства
                    промышленности и торговли РФ от 20 августа 2021 г. N 3273
                    "Об утверждении Плана мероприятий по импортозамещению в
                    медицинской промышленности Российской Федерации на период до
                    2024 года" решили создать компанию для разработки и
                    производства медицинских изделий.{' '}
                  </p>
                  <p
                    className={`${
                      yScroll > 485
                        ? 'animate-fade-up animate-ease-linear'
                        : 'text-transparent'
                    } leading-snug mt-[1rem] tracking-tight text-left text-[0.9rem] lg:text-[1.1rem]`}
                  >
                    Для реализации данного проекта была привлечена команда
                    талантливых специалистов. В 2020 году руководство компании
                    выбрало площадку для строительства
                    производственно-складского комплекса. Основными требованиями
                    к площадке было наличие готовой инфраструктуры, что
                    позволило бы сократить сроки реализации проекта.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative pt-[70px] pr-0 pb-[79px] lg:pt-[115px] lg:pb-[109px] h-full w-full -z-10">
            <img
              className="absolute top-0 h-full w-full object-cover -z-1"
              src={EximgFive}
              alt="img"
            />
            <div className="relative sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1094px] w-[100%] pr-[15px] pl-[15px] mx-auto">
              <div className="max-w-none lg:mx-auto lg:my-0 lg:max-w-[886px]">
                <div className="leading-snug tracking-tight text-left text-black text-[0.9rem] lg:text-[1.1rem]">
                  <p
                    className={`${
                      yScroll > 750
                        ? 'animate-fade-up animate-ease-linear'
                        : 'text - transparent'
                    } mb-[1rem] `}
                  >
                    Благодаря поддержке Министерства инвестиций промышленности и
                    науки Московской области «29» июля 2022 года, было подписано
                    соглашение на осуществление промышленно производственной
                    деятельности на территории особой экономической зоны ТВТ
                    «Дубна». В августе 2022 года НПК «Медпромлаб» получило
                    свидетельство, удостоверяющее регистрацию в качестве
                    резидента особой экономической зоны.{' '}
                  </p>
                  <p
                    className={`${
                      yScroll > 920
                        ? 'animate-fade-up animate-ease-linear'
                        : 'text-transparent'
                    }`}
                  >
                    Это важный шаг, который позволил компании получить
                    дополнительные льготы и налоговые преференции. «11» октября
                    2022 года был подписан договор аренды земельного участка на
                    территории экономической зоны, что позволило начать работы
                    по проектированию и строительству производственно-складского
                    комплекса площадью 1440 кв.м.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:pt-[70px] pt-[70px] pr-0 pb-[79px] block w-screen">
            <div className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1094px] w-[100%] pr-[15px] pl-[15px] mx-auto">
              <div className="max-w-none lg:mx-auto lg:my-0 lg:max-w-[886px]">
                <div className="leading-snug mt-[1rem] mb-[1rem] tracking-tight text-left text-[0.9rem] lg:text-[1.1rem]">
                  <p className="">
                    Общий объем инвестиций в проект свыше 270 мил. рублей.
                    Проектом предполагается строительство современного
                    предприятия, состоящего из комплекса зданий общей площадью
                    более: 1 440 кв.м, в котором будут расположены
                    производственные, складские, офисные помещения.{' '}
                  </p>
                  <p className={`mt-[1rem] mb-[1rem]`}>
                    На предприятии планируется производство медицинских изделий
                    и оборудования на основе собственных разработок и патентов
                    ООО НПК «МЕДПРОМЛАБ». Проектом предполагается производство
                    более 1 млн. единиц продукции в год, планируемый штат
                    предприятия свыше 100 человек. Основная задача проекта
                    заключается в реализации и поддержке государственной
                    политики, направленной на сохранения здоровья граждан
                    Российской Федерации.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-teal-200/20 md:pt-[102px] pt-[70px] pr-0 sm:pb-[70px] pb-[103px] block w-screen">
            <div className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1094px] mx-auto pr-[15px] pl-[15px]">
              <div className="max-w-none lg:mx-auto lg:my-0 lg:max-w-[886px]">
                <div className="leading-snug mt-[1rem] mb-[1rem] tracking-tight text-left text-[0.9rem] lg:text-[1.1rem]">
                  <p className={` text-red-700`}>
                    Миссия компании: Производить качественные медицинские
                    изделия которые помогут улучшить здоровье и качество жизни
                    людей.
                    <br />
                    Цели: Укрепление нашей репутации как надежного поставщика
                    качественных медицинских изделий на территории СНГ.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[72px] pr-0 pb-[70px] lg:pb-[140px] block -z-10">
          <div className="max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1094px] mx-auto w-full pr-[15px] pl-[15px]">
            <div className="max-w-none lg:max-w-[886px] mx-auto my-0 mb-[50px]">
              <h1
                className={`text-left leading-none tracking-wide text-[2.2rem] lg:text-[4.5rem] font-light`}
              >
                Продукция
              </h1>

              <div>
                <p
                  className={`mt-[2rem] leading-snug tracking-wide text-left text-[0.9rem] lg:text-[1.1rem] text-black`}
                >
                  ООО НПК "МЕДПРОМЛАБ" представляет широкий спектр медицинских
                  изделий и материалов.
                </p>
              </div>
            </div>
            <ul className="flex flex-wrap my-0 -mx-[15px] lg:-mx-[40px] list-none p-0">
              <li className="w-[100%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] py-0 px-[15px] lg:p-[34px] xl:p-[34px] 2xl:p-[34px] hover:w-[">
                <div
                  className=" cursor-pointer p-[40px] md:p-[70px] lg:pr-[56px] lg:pt-[60] lg:pl-[66px] lg:mb-[30px] xl:mb-[43px] 2xl:mb-[43px] mt-0 mr-auto mb-[40px] relative text-white h-[385px]"
                  onClick={() => navigate('/implants')}
                >
                  <div className="absolute left-0 top-0 w-[100%] h-[100%] bg-no-repeat bg-center bg-cover visible">
                    <img
                      className="h-full blur-[1.5px] w-full object-cover"
                      src={EximgTwo}
                      alt="img"
                    />
                  </div>
                  <div className="absolute  w-[100%] h-[100%]  left-0 top-0 flex justify-center items-center">
                    <div className="block sm: w-[90%] h-[90%] lg:w-[87%] lg:h-[87%] border-2 "></div>
                  </div>
                  <div className="relative flex flex-col h-[100%] justify-around visible  text-black">
                    <h2 className="lg:text-lg text-left text-black m-0">
                      Дентальные импланты
                    </h2>
                    <p className=" lg:text-lg  text-left">
                      Стоматологический имплантат - это конструкция,
                      используемая для внедрения в костную ткань человека с
                      целью замещения функций утраченного зуба.
                    </p>
                    <span className="relative inline-block text-left w-[60%] lg:text-lg">
                      Подробнее
                    </span>
                  </div>
                </div>

                <div
                  className="cursor-pointer p-[40px] md:p-[70px] lg:pr-[56px] lg:pt-[60] lg:pl-[66px] lg:mb-[30px] xl:mb-[43px] 2xl:mb-[43px] mt-0 mr-auto mb-[40px] relative text-white h-[385px]"
                  onClick={() => navigate('/fillingmaterial')}
                >
                  <div className="absolute left-0 top-0 w-[100%] h-[100%] bg-no-repeat bg-center bg-cover visible">
                    <img
                      className="h-full w-full object-cover"
                      src={EximgThree}
                      alt="img"
                    />
                  </div>
                  <div className="absolute  w-[100%] h-[100%]  left-0 top-0 flex justify-center items-center">
                    <div className="block sm: w-[90%] h-[90%] lg:w-[87%] lg:h-[87%] border-2"></div>
                  </div>
                  <div className="relative flex flex-col h-[100%] justify-around visible  text-black">
                    <h2 className="lg:text-lg text-left text-black m-0">
                      Пломбировочный материал
                    </h2>
                    <p className=" lg:text-lg  text-left">
                      Здесь будет текст Здесь будет текст Здесь будет текст
                      Здесь будет текст Стиль шрифта не подбирался Стиль шрифта
                      не подбирался
                    </p>
                    <span className="lg:text-lg relative inline-block text-black text-left w-[60%]">
                      Подробнее
                    </span>
                  </div>
                </div>
                <div
                  className="cursor-pointer p-[40px] md:p-[70px] lg:pr-[56px] lg:pt-[60] lg:pl-[66px] lg:mb-[30px] xl:mb-[43px] 2xl:mb-[43px] mt-0 mr-auto mb-[40px] relative text-white h-[385px]"
                  onClick={() => navigate('/dentalcare')}
                >
                  <div className="absolute left-0 top-0 w-[100%] h-[100%] bg-no-repeat bg-center bg-cover visible">
                    <img
                      className="h-full w-full object-cover"
                      src={EximgThree}
                      alt="img"
                    />
                  </div>
                  <div className="absolute  w-[100%] h-[100%]  left-0 top-0 flex justify-center items-center">
                    <div className="block sm: w-[90%] h-[90%] lg:w-[87%] lg:h-[87%] border-2"></div>
                  </div>
                  <div className="relative flex flex-col h-[100%] justify-around visible">
                    <h2 className="lg:text-lg text-left text-black m-0">
                      Средства по уходу за полостью рта
                    </h2>
                    <p className="lg:text-lg  text-black  text-left">
                      Здесь будет текст Здесь будет текст Здесь будет текст
                      Здесь будет текст Стиль шрифта не подбирался Стиль шрифта
                      не подбирался
                    </p>
                    <span className="relative lg:text-lg  inline-block  text-black text-left w-[60%]">
                      Подробнее
                    </span>
                  </div>
                </div>
              </li>
              <li className="w-[100%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] py-0 px-[15px] lg:p-[34px] xl:p-[34px] 2xl:p-[34px]">
                <div
                  className="cursor-pointer p-[40px] md:p-[70px] lg:pt-[61px] lg:pr-[56px] lg:pl-[66px] lg:mb-[30px] xl:mb-[43px] 2xl:mb-[43px] mt-0 mr-auto mb-[40px] relative text-white h-[385px]"
                  onClick={() => navigate('/surgicalinstruments')}
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
                      Хирургические инструменты
                    </h2>
                    <p className=" lg:text-lg  text-black text-left">
                      Здесь будет текст Здесь будет текст Здесь будет текст
                      Здесь будет текст Стиль шрифта не подбирался Стиль шрифта
                      не подбирался
                    </p>
                    <span className="relative  lg:text-lg inline-block text-black text-left w-[60%]">
                      Подробнее
                    </span>
                  </div>
                </div>
                <div
                  className="cursor-pointer p-[40px] md:p-[70px] lg:pt-[61px] lg:pr-[56px] lg:pl-[66px] lg:mb-[30px] xl:mb-[43px] 2xl:mb-[43px] mt-0 mr-auto mb-[40px] relative text-white h-[385px]"
                  onClick={() => navigate('/rehabilitation')}
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
                      Технические средства реабилитации
                    </h2>
                    <p className="lg:text-lg  text-black text-left">
                      Здесь будет текст Здесь будет текст Здесь будет текст
                      Здесь будет текст Стиль шрифта не подбирался Стиль шрифта
                      не подбирался
                    </p>
                    <span className="relative lg:text-lg  text-black inline-block text-left w-[60%]">
                      Подробнее
                    </span>
                  </div>
                </div>
                <div
                  className="cursor-pointer p-[40px] md:p-[70px] lg:pt-[61px] lg:pr-[56px] lg:pl-[66px] lg:mb-[30px] xl:mb-[43px] 2xl:mb-[43px] mt-0 mr-auto mb-[40px] relative text-white h-[385px]"
                  onClick={() => navigate('/diagnosticequipment')}
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
                      Диагностическое оборудование
                    </h2>
                    <p className="text-sm lg:text-lg  text-black text-left">
                      Здесь будет текст Здесь будет текст Здесь будет текст
                      Здесь будет текст Стиль шрифта не подбирался Стиль шрифта
                      не подбирался
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
      </main>
      <footer>
        <div className="bg-black text-white w-[100%] h-[70px]">
          <h3>Надо проектом работали:</h3>
          <p>R</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
