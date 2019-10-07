import React from 'react';
import Konami from 'react-konami-code';

function EasterEgg() {
  const easterEggToggle = () => {
    window.location.assign('https://i.redd.it/fn0eq16ttlp31.png');
  };

  return (
    <div>
      <Konami action={easterEggToggle} />
    </div>
  );
}

export default EasterEgg;
