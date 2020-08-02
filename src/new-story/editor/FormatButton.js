import React from "react";
import { useSlate } from 'slate-react';
import { Button, Icon } from "./components/Components";
import { isFormatActive, toggleFormat } from "./utils/formatUtils";

// eslint-disable-next-line react/prop-types
const FormatButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <Button
      reversed
      active={isFormatActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault();
        toggleFormat(editor, format);
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  );
};

export default FormatButton;
