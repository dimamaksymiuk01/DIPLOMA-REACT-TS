import Burger from './BurgerMenu.tsx'
import LogoUkrMobil from './logoUkrMobil.tsx'
import SelectLanguage from './Language.tsx'
import Logout from './LogoutBtn.tsx'

import '../style/navigate.scss'


function NavigateMobile() {

  return (
      <div className={'NavigateMobile'}>
        <Burger/>
        <LogoUkrMobil/>
        <SelectLanguage/>
        <Logout/>
      </div>
  )
}

export default NavigateMobile