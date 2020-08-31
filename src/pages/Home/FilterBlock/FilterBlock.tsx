import "./FilterBlock.scss";
import React, {useState, useEffect} from "react";
import {Slider, InputNumber, Checkbox, Button, Drawer, Select, Cascader} from "antd";
import {AppstoreOutlined, BarsOutlined} from "@ant-design/icons";

export const FilterBlock: React.FC = () => {
  // sort logic
  const sortOptions = [
    {
      value: "rating",
      label: "Rating",
    },
    {
      value: "price",
      label: "Price",
      children: [
        {
          value: "asc",
          label: "Ascending",
        },
        {
          value: "desc",
          label: "Descending",
        },
      ],
    },
    {
      value: "store",
      label: "Store",
      children: [
        {
          value: "Павлово",
          label: "Павлово",
        },
        {
          value: "Богородск",
          label: "Богородск",
        },
      ],
    },
  ];

  const sortHandler = (value) => {
    console.log(value);
  };

  // category logic
  const categoryHandler = (e: React.MouseEvent) => {
    const selectedElements = document.getElementsByClassName("filterBlock__item__category_selected");

    if (selectedElements.length > 0) selectedElements[0].className = "filterBlock__item__category";

    e.currentTarget.classList.add("filterBlock__item__category_selected");
  };

  // brend logic
  const brendList = ["Dr.Hoffman", "RLine", "Mr.Dominant"];

  const brendHandler = (e) => {
    console.log("brendHandler", e);
  };

  // price logic
  const [inputValue, setInputValue] = useState<[number, number]>([0, 100]);
  const [defaultInputValue, setDefaultInputValue] = useState<[number, number]>([0, 100]);
  const onAfterChange = (e) => console.log("inputValue onAfterChange", e);

  // country logic

  const countryList = ["Russia", "Germany", "USA"];

  const countryHandler = (e) => {
    console.log("countryHandler", e);
  };

  const [showDrawer, setShowDrawer] = useState(true);

  //  reder content logic

  const [greedRender, setGreedRender] = useState(true);

  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    if (document.documentElement.clientWidth <= 1080) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }

    window.addEventListener("resize", () => {
      if (document.documentElement.clientWidth <= 1080) {
        setMobileView(true);
      } else {
        setMobileView(false);
      }
    });
  }, []);

  const renderContent = () => {
    return (
      <div className={!mobileView ? "filterBlock_desctop" : ""}>
        <div className='filterBlock__item'>
          <h2>Sort by</h2>
          <Cascader
            options={sortOptions}
            onChange={sortHandler}
            defaultValue={["rating"]}
            expandTrigger={"hover"}
            className='filterBlock__item__sort-select'
          />
        </div>
        <div className='filterBlock__item'>
          <h2>Category</h2>
          <ul id='filterBlock__item__category-list'>
            <li className='filterBlock__item__category filterBlock__item__category_selected' onClick={categoryHandler}>
              Protein
            </li>
            <li className='filterBlock__item__category' onClick={categoryHandler}>
              Gainer
            </li>
            <li className='filterBlock__item__category' onClick={categoryHandler}>
              Amino Acid
            </li>
            <li className='filterBlock__item__category' onClick={categoryHandler}>
              Creatin
            </li>
            <li className='filterBlock__item__category' onClick={categoryHandler}>
              Fat Burner
            </li>
            <li className='filterBlock__item__category' onClick={categoryHandler}>
              Pre-workout complex
            </li>
            <li className='filterBlock__item__category' onClick={categoryHandler}>
              Health & Recovery
            </li>
          </ul>
        </div>
        <div className='filterBlock__item'>
          <h2>Brend</h2>
          <Checkbox.Group options={brendList} onChange={brendHandler} className='filterBlock__item__checkbox-group' />
        </div>
        <div className='filterBlock__item'>
          <h2>Price</h2>
          <Slider
            range
            defaultValue={[20, 50]}
            value={inputValue}
            onChange={(e) => setInputValue(e)}
            onAfterChange={onAfterChange}
            className='filterBlock__item__slider'
          />
          <div className='filterBlock__item__price-fields'>
            <InputNumber
              min={defaultInputValue[0]}
              max={inputValue[1]}
              value={inputValue[0]}
              onChange={(e) => setInputValue([+e!, inputValue[1]])}
              className='filterBlock__item__price-input'
            />
            <InputNumber
              min={defaultInputValue[0]}
              max={defaultInputValue[1]}
              value={inputValue[1]}
              onChange={(e) => setInputValue([inputValue[0], +e!])}
              className='filterBlock__item__price-input'
            />
          </div>
        </div>
        <div className='filterBlock__item'>
          <h2>Country</h2>
          <Checkbox.Group
            options={countryList}
            onChange={countryHandler}
            className='filterBlock__item__checkbox-group'
          />
        </div>
      </div>
    );
  };

  return (
    <div className='filterBlock__wrapper'>
      <div className='filterBlock__controls'>
        <Button onClick={() => setShowDrawer(!showDrawer)}>Filters</Button>
        <Button
          icon={greedRender ? <AppstoreOutlined /> : <BarsOutlined />}
          onClick={() => setGreedRender(!greedRender)}
        />
      </div>

      {!mobileView ? (
        renderContent()
      ) : (
        <Drawer
          placement='left'
          closable={true}
          onClose={() => setShowDrawer(false)}
          visible={showDrawer}
          getContainer={false}
          style={{position: "absolute", left: !showDrawer ? "-1000px" : ""}}
          mask={false}
          className='filterBlock__drawer'>
          {renderContent()}
        </Drawer>
      )}
    </div>
  );
};
