import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { TbChevronDown, TbAlignJustified, TbChevronUp } from "react-icons/tb";

import MedpromlabLogo from "../img/MedpromlabLogo_2.png";
import Oezlogo from "../img/Oezlogo.png";

function Menu({
  bgColor = "bg-white/80",
  height = "h-[58px]",
  margin = "-mt-[6rem]",
}) {
  const [open, setOpen] = useState(false);
  const handleClickAway = () => {
    setOpen(false);
    setOpenproduct(false);
  };

  const handleClick = () => {
    setOpen(!open);
  };
  const [openProduct, setOpenproduct] = useState(false);

  const handleClickproduct = () => {
    setOpenproduct(!openProduct);
  };

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header
      className={`fixed py-[10px] min-w-[320px]  px-0 w-full left-0 top-0 z-10 m-0 ${bgColor}`}
    >
      <div className="flex flex-wrap items-start my-0 mx-auto py-0 px-[15px] max-w-[1314px] animate-fade-down animate-ease-in">
        <div className="relative flex w-[50%] items-center ">
          <button
            className="overflow-hidden text-black py-[10px]  pr-[20px] top-0 left-[10rem] text-[1.2rem] lg:text-[1.8rem]"
            onClick={handleClick}
          >
            {" "}
            <TbAlignJustified />{" "}
          </button>

          <img
            className={`cursor-pointer ${height} object-cover max-w-[575px]:ml-[20px]`}
            src={MedpromlabLogo}
            onClick={() => navigate("/")}
          />
        </div>
        <div className="relative flex w-[50%] justify-end -z-10">
          <a href="https://oezdubna.ru/">
            <img
              className={`cursor-pointer bg-auto w-full ${height} mt-0 object-cover pr-[1rem]`}
              src={Oezlogo}
            />
          </a>
        </div>
      </div>
      {open ? (
        <>
          <div
            className={`fixed opacity-80 ${margin} pb-[100rem] w-full h-full overflow-hidden z-7 bg-black/50 mx-0`}
            onClick={handleClickAway}
          ></div>
          <div
            className={`block h-screen ${margin} overflow-scroll pb-[100rem] md:w-[70%] w-[100%] lg:w-[60%] xl:w-[43%] fixed  bg-white  text-black pt-[1rem] z-8 ${
              open
                ? "animate-fade-right animate-once animate-duration-[1000ms] animate-delay-0 animate-ease-out animate-alternate animate-fill-both"
                : "animate-fade-left"
            } animate-ease-out animate-duration-300`}
          >
            <nav className="text-black text-left no-underline md:text-lg lg:text-xl xl:text-xl font-[300] tracking-wide  ">
              <ul className="ml-[2rem] md:ml-[3.5rem] lg:ml-[4.0rem] xl:ml-[5.5rem] uppercase">
                <li>
                  <a
                    href="#!"
                    className="absolute top-10 right-10 text-3xl"
                    onClick={handleClickAway}
                  >
                    x
                  </a>
                </li>
                <li
                  className="mt-[12rem] mb-[2rem] md:mb-[5rem] xl:mb-[3rem] "
                  onClick={handleClickAway}
                >
                  <Link to="/">Главная</Link>
                </li>
                <li className=" mb-[1rem]" onClick={handleClickAway}>
                  <Link to="/about">О компании</Link>
                </li>
                <li className="mb-[1rem]" onClick={handleClickproduct}>
                  <Link to="/products">
                    {" "}
                    <div className="flex items-center justify-between pr-[2rem] bg-gradient-to-b from-white to-slate-200 ">
                      <div className=" ">Продукция</div>
                      <div className="animate-pulse animate-infinite animate-duration-[3000ms] animate-delay-[2000ms] animate-ease-in">
                        {!openProduct ? <TbChevronDown /> : <TbChevronUp />}
                      </div>
                    </div>
                  </Link>
                </li>
                {openProduct ? (
                  <ul className="">
                    <li className="mb-[1rem]" onClick={handleClickAway}>
                      <Link to="/products/productsfordentistry">
                        Материалы и продукция для стоматологии
                      </Link>
                    </li>
                    <li className="mb-[1rem]" onClick={handleClickAway}>
                      <Link to="/products/dentalcare">
                        Средства гигиены полости рта
                      </Link>
                    </li>
                    <li className="mb-[1rem]" onClick={handleClickAway}>
                      <Link to="/products/dentalcare">
                        Технические средства реабилитации (ТСР)
                      </Link>
                    </li>
                    <li className="mb-[1rem]" onClick={handleClickAway}>
                      <Link to="/products/dentalcare">Оборудование</Link>
                    </li>
                    <li className="mb-[1rem]" onClick={handleClickAway}>
                      <Link to="/products/dentalcare">Оптический Материал</Link>
                    </li>
                    <li className="mb-[1rem]" onClick={handleClickAway}>
                      <Link to="/products/dentalcare">
                        Продукция компаний TERUMO и GORE EXCLUDER
                      </Link>
                    </li>
                  </ul>
                ) : null}
                <li className=" mb-[1rem]" onClick={handleClickAway}>
                  <Link to="/projects"> Проекты</Link>
                </li>
                <li className="mb-[1rem]" onClick={handleClickAway}>
                  <Link to="/socialsignicance">Значимость</Link>
                </li>
                <li className="mb-[1rem]" onClick={handleClickAway}>
                  <Link to="/forpartners">Партнерам</Link>
                </li>
                <li className="mb-[1rem]">
                  <Link to="/contacts">Контакты</Link>
                </li>
              </ul>
            </nav>
          </div>
        </>
      ) : null}
    </header>
  );
}

export default Menu;
