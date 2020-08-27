import "./FilterBlock.scss";
import React, {useState} from "react";
import {Slider, InputNumber, Checkbox, Button, Drawer} from "antd";

export const FilterBlock: React.FC = () => {
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

  return (
    <div className='filterBlock__wrapper'>
      {!showDrawer && (
        <Button type='primary' onClick={() => setShowDrawer((prev) => !prev)}>
          Open Filters
        </Button>
      )}
      <Drawer
        placement='left'
        closable={true}
        onClose={() => setShowDrawer(false)}
        visible={showDrawer}
        getContainer={false}
        style={{position: "absolute"}}
        mask={false}>
        <div className='filterBlock__item'>
          <h2>Category</h2>
          <ul id='filterBlock__item__category-list'>
            <li className='filterBlock__item__category' onClick={categoryHandler}>
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
        <div className='filterBlock__item'>
          <h2>Country</h2>
          <Checkbox.Group
            options={countryList}
            onChange={countryHandler}
            className='filterBlock__item__checkbox-group'
          />
        </div>
      </Drawer>
    </div>
  );
};
