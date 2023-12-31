import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../UX/UI/Button";
import { RiArrowDownSLine } from "react-icons/ri";

import bgvideo from "../video/bgvideo.mp4";
import Eximg from "../img/Eximg.jpg";
import EximgTwo from "../img/Eximg2.jpg";
import EximgThree from "../img/Eximg3.jpg";
import EximgFour from "../img/Eximg4.jpg";
import EximgFive from "../img/Eximg5.jpeg";

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
              <h1 className="mb-[3rem] leading-none tracking-[0.8rem] text-black text-left text-[1.5rem] lg:text-[4.5rem] font-thin">
                МЕДПРОМЛАБ
              </h1>
              <p className="mt-[1rem] max-w-[665px] leading-snug tracking-wide text-left text-[1rem] lg:text-[1.2rem]">
                Разработка и производство медико-инструментальной продукции.
                <br />
                Обеспечение государственных и частных медицинских учреждений
                качественным соверменным медицинским оборудованием и
                материалами. Работать на благо общества покрывая потребности
                здравоохранения и смежных отраслей.
                <br />{" "}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className=" pt-[70px] pr-0 pb-[79px] lg:pt-[161px] block">
            <div className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1094px] w-[100%] pr-[15px] pl-[15px] mx-auto">
              <div className="max-w-none lg:mx-auto lg:my-0 lg:max-w-[886px]">
                <div className=" mt-[1rem] tracking-tight text-left text-black text-[1.1rem]">
                  <p
                    className={` leading-snug mt-[1rem] mb-[1rem] tracking-tight text-left text-[0.9rem] lg:text-[1.1rem]`}
                  >
                    Компания НПК МЕДПРОМЛАБ была зарегистрирована в 2021 году,
                    но ее история началась в 2019 году.
                    <br />
                    Группа инвесторов, в целях реализации приказа Министерства
                    промышленности и торговли РФ от 20 августа 2021 г. N 3273
                    "Об утверждении Плана мероприятий по импортозамещению в
                    медицинской промышленности Российской Федерации на период до
                    2024 года" решили создать компанию для разработки и
                    производства медицинских изделий.{" "}
                  </p>
                  <p
                    className={` leading-snug mt-[1rem] tracking-tight text-left text-[0.9rem] lg:text-[1.1rem]`}
                  >
                    Для реализации данного проекта была привлечена команда
                    талантливых специалистов. В 2020 году руководство компании
                    выбрало площадку для строительства
                    производственно-складского комплекса. Основными требованиями
                    к площадке было наличие готовой инфраструктуры, что
                    позволило бы сократить сроки реализации проекта.{" "}
                  </p>
                  <div
                    className={`text-[0.9rem] lg:text-[1.1rem] flex justify-end`}
                    onClick={() => navigate("/about")}
                  >
                    <Button />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative pt-[70px] pr-0 pb-[79px] lg:pt-[115px] lg:pb-[109px] h-full w-full -z-10">
            <img
              className="absolute top-0 h-full w-full object-cover -z-10"
              src={EximgFive}
              alt="img"
            />
            <div className="relative sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1094px] w-[100%] pr-[15px] pl-[15px] mx-auto">
              <div className="max-w-none lg:mx-auto lg:my-0 lg:max-w-[886px]">
                <div className="leading-snug tracking-tight text-left text-black text-[0.9rem] lg:text-[1.1rem]">
                  <p className={` mb-[1rem] `}>
                    Благодаря поддержке Министерства инвестиций промышленности и
                    науки Московской области «29» июля 2022 года, было подписано
                    соглашение на осуществление промышленно производственной
                    деятельности на территории особой экономической зоны ТВТ
                    «Дубна». В августе 2022 года НПК «Медпромлаб» получило
                    свидетельство, удостоверяющее регистрацию в качестве
                    резидента особой экономической зоны.{" "}
                  </p>
                  <p className={``}>
                    Это важный шаг, который позволил компании получить
                    дополнительные льготы и налоговые преференции. «11» октября
                    2022 года был подписан договор аренды земельного участка на
                    территории экономической зоны, что позволило начать работы
                    по проектированию и строительству производственно-складского
                    комплекса площадью 1440 кв.м.{" "}
                  </p>
                  <div
                    className="flex justify-end z-20"
                    onClick={() => navigate("/projects")}
                  >
                    <Button />
                  </div>
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
                    производственные, складские, офисные помещения.{" "}
                  </p>
                  <p className={`mt-[1rem] mb-[1rem]`}>
                    На предприятии планируется производство медицинских изделий
                    и оборудования на основе собственных разработок и патентов
                    ООО НПК «МЕДПРОМЛАБ». Проектом предполагается производство
                    более 1 млн. единиц продукции в год, планируемый штат
                    предприятия свыше 100 человек. Основная задача проекта
                    заключается в реализации и поддержке государственной
                    политики, направленной на сохранения здоровья граждан
                    Российской Федерации.{" "}
                  </p>
                  <div
                    className="flex justify-end"
                    onClick={() => navigate("/projects")}
                  >
                    <Button />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-200/20 md:pt-[102px] pt-[70px] pr-0 sm:pb-[70px] pb-[103px] block w-screen">
            <div className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1094px] mx-auto pr-[15px] pl-[15px]">
              <div className="max-w-none lg:mx-auto lg:my-0 lg:max-w-[886px]">
                <div className="leading-snug mt-[1rem] mb-[1rem] tracking-tight text-left text-[0.9rem] lg:text-[1.1rem]">
                  <p className={` text-red-700`}>
                    Миссия компании: Производить качественные медицинские
                    изделия которые помогут улучшить здоровье и качество жизни
                    людей.
                    <br />
                    Цели: Укрепление нашей репутации как надежного поставщика
                    качественных медицинских изделий на территории СНГ.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[72px] pr-0 pb-[70px] lg:pb-[140px] block -z-10">
          <div className="max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1094px] mx-auto w-full pr-[15px] pl-[15px]">
            <div className="max-w-none lg:max-w-[886px] mx-auto my-0 mb-[50px]">
              <div>
                <p
                  className={`mt-[2rem] leading-snug tracking-wide text-left text-black`}
                >
                  Продукция НПК МЕДПРОМЛАБ включает в себя широкий спектр
                  медицинских изделий и материалов
                </p>
                <div
                  className="mt-[1rem] flex justify-end"
                  onClick={() => navigate("/products")}
                >
                  <Button />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className=" bg-slate-500">
        <div className="pl-[5rem]  text-white w-[100%] h-[70px] text-left">
          <h3>
            Copyright 2023 Scientific production company LLC NPK MEDPROMLAB
          </h3>
          <p> Design and Development: Artem Surzhko</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
