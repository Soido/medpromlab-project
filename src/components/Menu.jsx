import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useScroll } from "react-use";

function Menu() {
  const [open, setOpen] = useState(false);
  const handleClickAway = () => {
    setOpen(false);
    console.log("clicked away");
  };

  const handleClick = () => {
    setOpen(!open);
    console.log("clicked");
  };
  const [navbar, setNavbar] = useState(false);
  const changeBcgrn = () => {
    console.log(window.scrollY);
  };
  window.addEventListener("scroll", changeBcgrn);

  const navigate = useNavigate();
  // const scrollRef = useRef(null);
  //const { y } = useScroll(scrollRef);

  return (
    <>
      <header className="fixed py-[5px] min-w-[320px] px-0 w-full left-0 top-0 z-10 m-0">
        <div className="relative visible flex flex-wrap items-start my-0 mx-auto py-0 px-[15px] max-w-[1314px]">
          <div className="relative flex w-[50%] items-center">
            <button
              className="overflow-visible text-black p-[10px] top-0 left-[15rem] text-[1.8rem]"
              onClick={handleClick}
            >
              {" "}
              &#9776;{" "}
            </button>
            {open ? (
              <>
                <div
                  className="fixed opacity-80 top-0 left-0 w-full h-full overflow-hidden z-7 bg-black/50"
                  onClick={handleClickAway}
                ></div>
                <div
                  className=" block h-screen md:w-[70%] w-[100%] lg:w-[60%] xl:w-[43%] fixed left-0 top-0 bg-white  text-black pt-[1rem] z-8"
                  onClick={handleClickAway}
                >
                  <nav className="text-black text-left no-underline text-2xl font-light ">
                    <ul className="ml-[7.5rem] uppercase">
                      <li>
                        <a
                          href="#!"
                          className="absolute top-5 right-20 text-3xl ml-[50px]"
                          onClick={handleClickAway}
                        >
                          x
                        </a>
                      </li>
                      <li className="mt-[7rem] mb-[5rem]">
                        <Link to="/">Главная</Link>
                      </li>
                      <li className=" mb-[1.5rem]">
                        <Link to="/implants">Дентальный импланты</Link>
                      </li>
                      <li className=" mb-[1.5rem]">
                        <Link to="/fillingmaterial">
                          Пломбировочный материал
                        </Link>
                      </li>
                      <li className=" mb-[1.5rem]">
                        <Link to="/dentalcare">
                          Средства по уходу за полостью рта
                        </Link>
                      </li>
                      <li className=" mb-[1.5rem]">
                        <Link to="/surgicalinstruments">
                          Хирургические инструменты
                        </Link>
                      </li>
                      <li className=" mb-[1.5rem]">
                        <Link to="/rehabilitation">
                          Технические средства реабилитации (ТСР)
                        </Link>
                      </li>
                      <li className=" mb-[3rem]">
                        <Link to="/diagnosticequipment">
                          Диагностическое оборудование
                        </Link>
                      </li>
                      <li className="mb-[1rem]">
                        <Link to="/socialsignicance">
                          Социальная значимость
                        </Link>
                      </li>
                      <li className="mb-[1rem]">
                        <Link to="/forpartners">Инвесторам и партнерам</Link>
                      </li>
                      <li className="mb-[1rem]">
                        <Link to="/contacts">Контакты</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </>
            ) : null}

            <h1
              className=" cursor-pointer text-[1.5rem] pl-[1.5rem] text-left text-black mt-0"
              onClick={() => navigate("/")}
            >
              МЕДПРОМЛАБ
            </h1>
          </div>
        </div>
      </header>
    </>
  );
}

export default Menu;
