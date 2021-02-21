import React from 'react';
import { CustomToolTipWrapper, CustomToolTipContent } from './CustomToolTip.style';

const CustomToolTip = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <CustomToolTipWrapper>
        <CustomToolTipContent>Remove</CustomToolTipContent>
      </CustomToolTipWrapper>
      <div
        style={{
          width: '0px',
          height: '0px',
          borderLeft: '10px solid transparent',
          borderRight: '20px solid #2C363F',
          borderBottom: '14px solid transparent',
          borderTop: '12px solid transparent',
          position: 'absolute',
          marginRight: '-38px',
        }}
      />
    </div>
  );
};

export default CustomToolTip;
