import { LOGOUT } from '../../shared/consts/picturesUrl.ts'

import '../style/navigate.scss'

function Logout() {

  return (
      <div className={'LogoutImg'}>
          <img src={LOGOUT}/>
      </div>
  )
}

export default Logout