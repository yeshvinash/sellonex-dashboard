import React, { useState } from "react";
import { Select, Space } from "antd";
import styled from "styled-components";
import SVGIcons from "../Data/SVGIcons";

const StyledSelect = styled(Select)`
  font-family: var(--primary-font);
  .ant-select-selector {
    background-color: transparent !important;
    border: 1px solid var(--dark-gray) !important;
    color: var(--white) !important;
    font-weight: 300;
    font-size: 12px;
    box-shadow: none;
    outline: none;
    .ant-select-selection-item {
      font-weight: 300;
      color: var(--white) !important;
    }
  }
  .ant-select-arrow {
    width: 10px;
    height: 10px;
    color: white !important;
  }
`;

const CustomSelect = ({ options, defaultValue, onChange }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleChange = (value) => {
    setSelectedValue(value);
    onChange(value);
  };

  const renderOption = (option) => (
    <Space>
      <span>{option.label}</span>
    </Space>
  );

  return (
    <StyledSelect
      value={selectedValue}
      onChange={handleChange}
      suffixIcon={SVGIcons.DownArrow}
    >
      {options.map((option) => (
        <Select.Option key={option.value} value={option.value}>
          {renderOption(option)}
        </Select.Option>
      ))}
    </StyledSelect>
  );
};

export default CustomSelect;
