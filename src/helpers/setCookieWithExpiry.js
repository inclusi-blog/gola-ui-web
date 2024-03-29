function setCookieWithExpiry(name, value, daysToLive = 365) {
  // Encode value in order to escape semicolons, commas, and whitespace
  let cookie = `${name} = ${encodeURIComponent(value)}`;

  if (typeof daysToLive === 'number') {
    /* Sets the max-age attribute so that the cookie expires
    after the specified number of days */
    cookie += `; max-age = ${daysToLive * 24 * 60 * 60}`;
    document.cookie = cookie;
  }
}

export default setCookieWithExpiry;
