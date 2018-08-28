import React from "react";
import Checkbox from "./Checkbox";
import { shallow } from "enzyme";

/* global jest, it, expect */

const id = "Checkboxid";
it("renders correctly", () => {
  const tree = shallow(<Checkbox label="label" id={id} />);
  expect(tree).toMatchSnapshot();
  expect(tree.find(".checked").length).toEqual(0);
  expect(tree.find("label").length).toEqual(1);
});

it("renders checked correctly", () => {
  const tree = shallow(<Checkbox label="label" checked={true} id={id} />);
  expect(tree).toMatchSnapshot();
  expect(tree.find(".checked").length).toEqual(1);
});

it("renders with label correctly", () => {
  const tree = shallow(<Checkbox label="label" id={id} />);
  expect(tree).toMatchSnapshot();
  expect(tree.find("label").length).toEqual(1);
  expect(tree.find("label span").length).toEqual(1);
});

it("renders without label correctly - despite being required", () => {
  const tree = shallow(<Checkbox id={id} />);
  expect(tree).toMatchSnapshot();
  expect(tree.find("label").length).toEqual(1);
  expect(tree.find("label span").length).toEqual(0);
});

it("onChange is called as expected", () => {
  const changeSpy = jest.fn();
  const tree = shallow(<Checkbox label="label" id={id} onChange={changeSpy} />);

  expect(changeSpy).not.toHaveBeenCalled();
  tree.find("input").simulate("change");

  expect(changeSpy).toHaveBeenCalled();
});
