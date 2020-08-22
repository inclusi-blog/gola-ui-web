import '@testing-library/jest-dom/extend-expect';

import 'jest-styled-components';

import 'mutationobserver-shim';

import 'jest-canvas-mock';

import './mocks/matchMedia';
import './mocks/localStorage';
import './mocks/sessionStorage';
import './mocks/location';
import './mocks/XMLHttpRequest';

import './custom-matchers';

jest.mock('react-transition-group', () => ({
  CSSTransition: props => (props.in ? props.children : null),
}));

jest.mock('appConfig');
