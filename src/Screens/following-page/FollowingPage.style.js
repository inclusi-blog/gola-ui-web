import styled from 'styled-components';
import Plus from 'assets/images/plus.svg';
import WhiteClose from 'assets/images/WhiteClose.svg';
import Tick from 'assets/images/tick.svg';

export const MainBlock = styled.div`
  height: 3455px;
  width: 1260px;
`;

export const GlobalInterest = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 866px;
  overflow: auto;
`;

export const LeadingWriters = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 420px;
  overflow: auto;
`;

export const PageTitle = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 48px;
  color: #000000;
  margin: 0 auto;
  margin-left: 16px;
`;

export const MyInterests = styled.div`
  height: 362px;
`;

export const ExploreInterests = styled.div`
  height: 1806px;
`;

export const InterestTitle = styled.div`
  margin-top: 64px;
  margin-left: 36px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #3b3b58;
`;

export const InterestBorder = styled.div`
  margin-top: 8px;
  margin-left: 36px;
  width: 1148px;
  border: 1px solid #9a9a9a;
`;
export const CategoryBlock = styled.div`
  margin-left: 36px;
  width: 1148px;
  display: flex;
  flex-wrap: wrap;
`;

export const Category = styled.div`
  margin-top: 32px;
  width: 318px;
  height: 389px;
  margin-right: 64px;
  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    border: none;
  }
  &:hover #categoryNameBlock {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    border: none;
  }
`;

export const CategoryImg = styled.img`
  width: 318px;
  height: 318px;
`;

export const CategoryNameBlock = styled.div`
  margin-top: -4px;
  width: 318px;
  height: 72px;
  display: flex;
  align-items: center;
  border: 1px solid #dee3ed;
  box-sizing: border-box;
  border-radius: 0px 0px 4px 4px;
  border-top: none;
  justify-content: space-between;
`;

export const CategoryName = styled.div`
  margin-left: 16px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 129%;
`;

export const FollowButton = styled.div`
  height: 40px;
  width: 40px;
  border: 1px solid #fa163f;
  box-sizing: border-box;
  border-radius: 20px;
  display: flex;
  margin-right: 12px;
  &:after {
    content: url(${(props) => (props.isClicked ? Tick : Plus)});
    font-size: 34px;
    color: red;
    display: flex;
    align-items: center;
    margin-left: ${(props) => (props.isClicked ? '12px' : '9px')};
    margin-top: ${(props) => (props.isClicked ? '-10px' : '-2px')};
  }

  &:hover {
    background: ${(props) => (props.isClicked ? 'inherit' : 'red')};
    &:after {
      content: url(${(props) => (props.isClicked ? Tick : WhiteClose)});
      font-size: 34px;
      color: white;
      display: flex;
      align-items: center;
      margin-left: ${(props) => (props.isClicked ? '12px' : '8px')};
      margin-top: ${(props) => (props.isClicked ? '-10px' : '-2px')};
    }
  }
`;
