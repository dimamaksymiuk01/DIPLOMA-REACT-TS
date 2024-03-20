import { LOGOUT } from '../../shared/consts/picturesUrl.ts'
import { ROUTES} from '../../types/enums.ts'
import { Link } from 'react-router-dom'

import '../style/navigate.scss'

function Logout() {

  return (
      <div className={'LogoutImg'}>
        <Link to={ROUTES.LOGIN}>
          <img src={LOGOUT}/>
        </Link>
      </div>
  )
}

export default Logout
