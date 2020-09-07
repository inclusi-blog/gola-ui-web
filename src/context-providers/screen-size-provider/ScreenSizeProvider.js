import React, { Component, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import breakpoints from '../../styles/breakpoints';
import { isShallowEqual } from '../../common-utils';

const queries = [
  { name: 'tabletMax', value: `(max-width: ${breakpoints.tablet})` },
  { name: 'desktopMin', value: `(min-width: ${breakpoints.desktop})` },
];

export const getSizeValues = (sizes) =>
  sizes.reduce(
    (result, size) => ({
      ...result,
      [size.name]: window.matchMedia(`only screen and ${size.value}`).matches,
    }),
    {}
  );

const screenSizeContext = createContext({});

const { Provider, Consumer } = screenSizeContext;

export default class ScreenSizeProvider extends Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/destructuring-assignment
    this.state = { sizes: getSizeValues(this.props.queries) };
    this.handleResize = this.handleResize.bind(this);
    this.mediaQueryList = {};
  }

  // eslint-disable-next-line react/destructuring-assignment
  handleResize = () => this.setState({ sizes: getSizeValues(this.props.queries) });

  componentDidMount = () => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.queries.forEach((size) => {
      this.mediaQueryList = window.matchMedia(`only screen and ${size.value}`);
      this.mediaQueryList.addListener(this.handleResize);
    });
  };

  // eslint-disable-next-line react/destructuring-assignment
  shouldComponentUpdate = (nextProps, nextState) => !isShallowEqual(this.state.sizes, nextState.sizes);

  componentWillUnmount = () => {
    this.mediaQueryList.removeListener(this.handleResize);
  };

  // eslint-disable-next-line react/destructuring-assignment
  render = () => <Provider value={this.state.sizes} {...this.props} />;
}

export const withSizes = (ComponentToDecorate) => (props) => (
  <Consumer>{(sizes) => <ComponentToDecorate {...props} sizes={sizes} />}</Consumer>
);

export const useScreenSize = () => useContext(screenSizeContext);

ScreenSizeProvider.propTypes = {
  queries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
};

ScreenSizeProvider.defaultProps = { queries };
