import React from "react";
import { shallow } from "enzyme";

import Button from "./Button";

/* global jest, test, expect */
it("Should render properly", () => {
  const onclick = jest.fn();
  const component = shallow(<Button onClick={onclick}>Default button</Button>);

  expect(component).toMatchSnapshot();
});

it("Should call the click method", () => {
  const onclick = jest.fn();
  const component = shallow(<Button onClick={onclick}>Default button</Button>);
  expect(onclick).not.toBeCalled();

  component.simulate("click");

  expect(onclick).toBeCalled();
});

it("Should render as disabled when passed `disabled={true}`", () => {
  const onclick = jest.fn();
  const component = shallow(
    <Button onClick={onclick} disabled={true}>
      Disabled button
    </Button>
  );

  expect(component.find("button[disabled]").length).toEqual(1);
  expect(component.find("button[aria-disabled=true]").length).toEqual(1);
});
