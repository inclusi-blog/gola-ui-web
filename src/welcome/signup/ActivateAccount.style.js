import styled from 'styled-components';
import { mediaquery } from '../../helpers/styleHelper';

export const AcknowledgeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${mediaquery.tablet`
    width: 768px;
  `}

  ${mediaquery.desktop`
    width: 1260px;
  `}
`;

export const CenterAcknowledgeWrapper = styled.div`
  width: 768px;
  ${mediaquery.tablet`
     margin-top: 210px;
  `};
  ${mediaquery.desktop`
    margin-top: 119px;
  `};
`;

export const VerifyContent = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 72px;
  color: #000000;
  margin: 0;
  text-align: center;
`;

export const EmailSentAcknowledgeText = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: #606060;
  margin-top: 40px;
`;

export const ChangeEmailSection = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #606060;
  margin-top: 59px;
  margin-bottom: 73px;
`;

export const ResendEmailSection = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #9a9a9a;
  margin-top: 35px;
`;
