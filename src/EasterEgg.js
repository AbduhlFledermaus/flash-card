import React from 'react';
import Konami from 'react-konami-code';

function EasterEgg() {
  const easterEggToggle = () => {
    window.location.assign('https://i.redd.it/fn0eq16ttlp31.png');
  };

  return <Konami action={easterEggToggle} />;
}

export default EasterEgg;
