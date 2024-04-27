import { Filter } from "@styled-icons/bootstrap/Filter";
import {
  Check,
  ChevronDown,
  ChevronUp,
  ChevronRight,
} from "@styled-icons/bootstrap";
import React, { useEffect, useState } from "react";
import BrandList from "./brand";
import ShortMenu from "~/components/Shop/Sidebar/ShortMenu";
import SidebarCategoryList from "./category";
import c from "./sidebarList.module.css";
import { XLg } from "@styled-icons/bootstrap";
import FilterMenu from "./attrutefilter/FilterMenu";
//import RangesliderJs from "rangeslider-js";
function SidebarList(props) {
  let [mobScreen, setMobScreen] = useState("");

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);

  //geneder
  let [genCls, setGnClass] = useState("");
  let [genHide, seGhHd] = useState("hidefilter");

  //brand
  let [brCls, setbrClass] = useState("");
  let [brHide, seBrHd] = useState("hidefilter");

  let actiVeDeactive = () => {
    if (genCls === "") {
      setGnClass("active");
      seGhHd("showFilter");
      setbrClass("");
      seBrHd("hidefilter");
    } else {
      setGnClass("");
      seGhHd("hidefilter");
    }
  };

  let actiBrand = () => {
    //brHide

    if (brCls === "") {
      setbrClass("active");
      seBrHd("showFilter");
      setGnClass("");
      seGhHd("hidefilter");
    } else {
      setbrClass("");
      seBrHd("hidefilter");
    }
  };

  const closeAll = () => {
    setbrClass("");
    seBrHd("hidefilter");
    setGnClass("");
    seGhHd("hidefilter");
  };

  useEffect(() => {
    setMobScreen(window.innerWidth);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    const width = window.innerWidth;
    if (width < 992) {
      setHideTopBar(true);
    } else if (position > 110) {
      setHideTopBar(true);
    } else {
      setHideTopBar(false);
    }
  };

  const toggleFilter = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <div className={`col-xl-3 col-4 ${c.sidebarLeft}`}>
        <div
          className={`${c.filter_btn} ${sidebarOpen ? c.b_left : ""}`}
          onClick={toggleFilter}
        >
          <Filter width={33} height={33} />
          <span>Filter</span>
        </div>
        {/* Sidebar  */}

        <div className={`${c.header} ${sidebarOpen ? c.s_left : ""}`}>
          <h4>Filter</h4>
          <XLg width={25} height={25} onClick={toggleFilter} />
        </div>

        {/* sidebaar content start form here*/}

        <div
          className={`sidebaar ${c.sidebar} ${sidebarOpen ? c.s_left : ""} ${
            hideTopBar ? c.sidebar_top_scroll : c.sidebar_top_normal
          }`}
        >
          <div className={c.sidebar_inner}>
            {mobScreen >= 600 ? (
              <div className="filter_head">
                {" "}
                <label>Filters</label>
              </div>
            ) : null}

            <div className={c.category_item}>
              <label
                className={`customBorder ${genCls}`}
                onClick={actiVeDeactive}
              >
                Gender <ChevronDown size={13} color="#000" />
              </label>
              <div className={genHide}>
                <SidebarCategoryList
                  category={props.category}
                  updateCategory={props.updateCategory}
                  updateSubCategory={props.updateSubCategory}
                />
              </div>
            </div>

            <div className={`c.category_item`}>
              <label className={`customBorder ${brCls}`} onClick={actiBrand}>
                Brands <ChevronDown size={13} color="#000" />
              </label>
              <div className={brHide}>
                <BrandList
                  brand={props.brand}
                  updateBrand={props.updateBrand}
                />
              </div>
            </div>

            <div className={`c.category_item mt-less-15`}>
              <FilterMenu
                closeAll={closeAll}
                attrData={props.attr}
                updateData={props.updateAttr}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(SidebarList);
