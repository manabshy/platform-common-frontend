import React from "react";
import PropTypes from 'prop-types';
import uuid from "uuid";

import './SubsectionMenu.scss';

const SubsectionMenu = ({ 
  id, 
  selected, 
  title, 
  onClickHandler,
  buttonClassName,
  titleClassName,
  iconClassName
}) => (
  <button id={id} title={title} className={`subsectionBtn ${selected && "CCactive"} ${buttonClassName}`} onClick={onClickHandler}>
    <span className={`button-title ${titleClassName}`}>{`${title}`}</span>
    <i className={`fa fa-angle-right arrow ${iconClassName}`} />{" "}
  </button>
);

SubsectionMenu.protoTypes = {
  selected: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func,
  id: PropTypes.string,
  buttonClassName: PropTypes.string,
  titleClassName: PropTypes.string,
  iconClassName: PropTypes.string
};

SubsectionMenu.defaultProps = {
  selected: false,
  onClickHandler: () => {},
  id: `SubsectionButton-${uuid.v4()}`
};

export default SubsectionMenu;