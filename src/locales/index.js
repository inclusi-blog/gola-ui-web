import welcome from '../translations/welcome';

const en = () => {
  return {
    welcome: welcome.en(),
  };
};

const tam = () => {
  return {
    welcome: welcome.tam(),
  };
};

export default { en, tam };
