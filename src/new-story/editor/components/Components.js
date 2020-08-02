import React from 'react';
import ReactDOM from 'react-dom';
import { cx, css } from 'emotion';

const colorMapper = {
  reversed: {
    true: 'white',
    false: '#aaa'
  },
  notReversed: {
    true: 'black',
    false: '#ccc'
  }
};


const getButtonColor = (reversed, active) => {
  if (reversed) {
    if (active) {
      return colorMapper.reversed.true;
    }
    return colorMapper.reversed.false;
  }

  if (active) {
    return colorMapper.notReversed.true;
  }

  return colorMapper.notReversed.true;
};

export const Button = React.forwardRef(
  // eslint-disable-next-line react/prop-types
  ({ className, active, reversed, ...props }, ref) => (
    <span
      {...props}
      ref={ref}
      className={cx(
        className,
        css`
          cursor: pointer;
          color: ${getButtonColor(reversed, active)};
        `
      )}
    />
  )
);

// eslint-disable-next-line react/no-multi-comp
export const EditorValue = React.forwardRef(
  // eslint-disable-next-line react/prop-types
  ({ className, value, ...props }, ref) => {
    // eslint-disable-next-line react/prop-types
    const textLines = value.document.nodes
    // eslint-disable-next-line react/prop-types
      .map(node => node.text)
      .toArray()
      .join('\n');
    return (
      <div
        ref={ref}
        {...props}
        className={cx(
          className,
          css`
            margin: 30px -20px 0;
          `
        )}
      >
        <div
          className={css`
            font-size: 14px;
            padding: 5px 20px;
            color: #404040;
            border-top: 2px solid #eeeeee;
            background: #f8f8f8;
          `}
        >
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Slate's value as text
        </div>
        <div
          className={css`
            color: #404040;
            font: 12px monospace;
            white-space: pre-wrap;
            padding: 10px 20px;
            div {
              margin: 0 0 0.5em;
            }
          `}
        >
          {textLines}
        </div>
      </div>
    );
  }
);

// eslint-disable-next-line react/prop-types,react/no-multi-comp
export const Icon = React.forwardRef(({ className, ...props }, ref) => (
  <span
    {...props}
    ref={ref}
    className={cx(
      'material-icons',
      className,
      css`
        font-size: 18px;
        vertical-align: text-bottom;
      `
    )}
  />
));

// eslint-disable-next-line react/prop-types,react/no-multi-comp
export const Instruction = React.forwardRef(({ className, ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    className={cx(
      className,
      css`
        white-space: pre-wrap;
        margin: 0 -20px 10px;
        padding: 10px 20px;
        font-size: 14px;
        background: #f8f8e8;
      `
    )}
  />
));

// eslint-disable-next-line react/prop-types,react/no-multi-comp
export const Menu = React.forwardRef(({ className, ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    className={cx(
      className,
      css`
        & > * {
          display: inline-block;
        }
        & > * + * {
          margin-left: 15px;
        }
      `
    )}
  />
));

export const Portal = ({ children }) => {
  return ReactDOM.createPortal(children, document.body);
};

// eslint-disable-next-line react/prop-types,react/no-multi-comp
export const Toolbar = React.forwardRef(({ className, ...props }, ref) => (
  <Menu
    {...props}
    ref={ref}
    className={cx(
      className,
      css`
        position: relative;
        padding: 1px 18px 17px;
        margin: 0 -20px;
        border-bottom: 2px solid #eee;
        margin-bottom: 20px;
      `
    )}
  />
));
