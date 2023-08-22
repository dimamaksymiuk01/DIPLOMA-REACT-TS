import NavigateMenuMobile from './NavigateMenuMobile.tsx'
import NavigateDesktop from "./NavigateMenuDesktop.tsx";

import '../style/header.css'

function Header() {

  return (
      <div className={'header'}>
          <NavigateMenuMobile/>
          <NavigateDesktop/>
      </div>
  )
}

export default Header