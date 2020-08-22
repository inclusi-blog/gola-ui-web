Object.defineProperty(global.window, 'matchMedia', {
  value: (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })
});

Object.defineProperty(global.window, 'getComputedStyle', {
  value: () => ({
    getPropertyValue: () => {}
  })
});

module.exports = global.window;
