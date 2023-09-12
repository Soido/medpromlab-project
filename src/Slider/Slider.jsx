import { useEffect, useState, Children, cloneElement } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import {
  TbArrowBadgeLeftFilled,
  TbArrowBadgeRightFilled,
  TbArrowBadgeLeft,
  TbArrowBadgeRight,
} from "react-icons/tb";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useWindowSize } from "react-use";
import "./Slider.css";

const PAGE_WITH = 650;

const Slider = ({ children }) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);
  const { width } = useWindowSize();
  console.log(width);

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + width * 0.25 + 150;
      console.log(newOffset);
      return Math.min(newOffset, 100);
    });
  };

  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - width * 0.25;
      const maxSet = -(width * 0.5 * (pages.length - 1) - 30);
      return Math.max(newOffset, maxSet);
    });
  };

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: `${width * 0.5}px`,
            maxWidth: `${width * 0.5}px`,
          },
        });
      })
    );
  }, []);

  return (
    <div
      className={`relative flex items-center justify-between h-full mb-[2rem]`}
    >
      <div className="z-10 bg-white/50 h-full flex items-center absolute">
        <RiArrowLeftSLine className="arrow" onClick={handleLeftArrowClick} />
      </div>
      <div className={`relative h-full overflow-scroll`}>
        <div
          className="all-pages-countainer"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {pages}
        </div>
      </div>
      <div className="absolute right-0 justify-end z-10 bg-white/50 h-full flex items-center">
        <div className=" justify-end">
          <RiArrowRightSLine
            className="arrow"
            onClick={handleRightArrowClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
