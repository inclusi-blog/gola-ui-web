import React from 'react';
import {CustomButtonContent, CustomProfileButtonStyle} from "./CustomProfileButton.style";
import {Link} from "react-router-dom";

const CustomProfileButton = ({path,buttonName}) => {
    return (
        <Link to={path} style={{ textDecoration: 'none' }}>
            <CustomProfileButtonStyle>
                <CustomButtonContent>{buttonName}</CustomButtonContent>
            </CustomProfileButtonStyle>
        </Link>
    );
};

export default CustomProfileButton;
