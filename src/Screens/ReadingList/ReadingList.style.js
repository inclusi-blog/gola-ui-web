import styled from 'styled-components';

export const Title = styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 72px;
    color: #2C363F;
    margin-top: 64.22px;
    margin-bottom: 55px;
`;

export const RemoveCircleContainer = styled.div`
    width: 53px;
    height: 53px;
    border-radius: 200px;
    background: #F1F5F8;
    margin-left: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
        &:hover{
            span:first-child{
                visibility: visible;
            }
         }
`;

export const RemoveIcon = styled.img`
    width: 30px;
    height: 30px;
`;

export const ApplyRow = styled.div`
    display: flex;
    flex-direction: row;
`;

export const HoverComponent = styled.span`
    width: 90px;
    height: 37px;
    border-radius: 5px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: #FFFFFF;

    visibility: hidden;
    top: 100%;
    width: 120px;
    background-color: #3b3b58;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 150%;
    left: 75%;
    margin-left: -60px;
    
    &::after {
        margin-top: 42px;
        left: 45%;
        content: "";
        position: absolute;
        margin-left: -6px;
        border-width: 10px;
        border-style: solid;
        border-color: #3b3b58 transparent transparent transparent;
    } 
`;
