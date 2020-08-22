const originalLocation = global.location;
const Location = {
  ...originalLocation,

  assign() {},
  reload() {},
  replace() {},
};

delete global.location;
global.location = Location;

module.exports = global;
