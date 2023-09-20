import React, { useState } from 'react';
import Cutting from '../../components/Cutting.tsx';
import Displays from '../../components/Displays.tsx';
import Accumulators from '../../components/Accumulators.tsx';
import Covers from '../../components/Covers.tsx';
import Services from '../../components/Services.tsx';

import '../../components/style/navStorage.scss';

function NavStorage() {
  const [isCuttingVisible, setIsCuttingVisible] = useState(false);
  const [isDisplaysVisible, setIsDisplaysVisible] = useState(false);
  const [isAccumulatorsVisible, setIsAccumulatorsVisible] = useState(false);
  const [isCoversVisible, setIsCoversVisible] = useState(false);
  const [isServicesVisible, setIsServicesVisible] = useState(false);

  const handleButtonClick = (componentName: string) => {
    setIsCuttingVisible(false);
    setIsDisplaysVisible(false);
    setIsAccumulatorsVisible(false);
    setIsCoversVisible(false);
    setIsServicesVisible(false);

    if (componentName === 'Cutting') {
      setIsCuttingVisible(true);
    } else if (componentName === 'Displays') {
      setIsDisplaysVisible(true);
    } else if (componentName === 'Accumulators') {
      setIsAccumulatorsVisible(true);
    } else if (componentName === 'Covers') {
      setIsCoversVisible(true);
    } else if (componentName === 'Services') {
      setIsServicesVisible(true);
    }
  };

  return (
    <>
      <div className={'NavStorage'}>
        <button className={"bubbly-button"} onClick={() => handleButtonClick('Cutting')}>Зрізки</button>
        <button className={"bubbly-button"} onClick={() => handleButtonClick('Displays')}>Дисплеї</button>
        <button className={"bubbly-button"} onClick={() => handleButtonClick('Accumulators')}>Акб</button>
        <button className={"bubbly-button"} onClick={() => handleButtonClick('Covers')}>Кришки</button>
        <button className={"bubbly-button"} onClick={() => handleButtonClick('Services')}>Послуги</button>
      </div>
      {isCuttingVisible && <Cutting />}
      {isDisplaysVisible && <Displays />}
      {isAccumulatorsVisible && <Accumulators />}
      {isCoversVisible && <Covers />}
      {isServicesVisible && <Services />}
    </>
  );
}

export default NavStorage;