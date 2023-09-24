import { useState } from 'react';
import Cutting from './Cutting.tsx';
import Displays from './Displays.tsx';
import Accumulators from './Accumulators.tsx';
import Covers from './Covers.tsx';
import Services from './Services.tsx';
import { useTranslation } from 'react-i18next'

import '../../components/style/navStorage.scss';

function NavStorage() {
  const { t } = useTranslation();

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
        <button className={"bubbly-button"} onClick={() => handleButtonClick('Cutting')}>{t("REPAIRS.CUTTING")}</button>
        <button className={"bubbly-button"} onClick={() => handleButtonClick('Accumulators')}>{t("REPAIRS.DASPLAYS")}</button>
        <button className={"bubbly-button"} onClick={() => handleButtonClick('Displays')}>{t("REPAIRS.ACCUMULATORS")}</button>
        <button className={"bubbly-button"} onClick={() => handleButtonClick('Covers')}>{t("REPAIRS.COVERS")}</button>
        <button className={"bubbly-button"} onClick={() => handleButtonClick('Services')}>{t("REPAIRS.SERVICES")}</button>
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