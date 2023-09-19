import BrendMenu from '../pages/repairs/BrendMenu.tsx'
import CutingTable from '../pages/repairs/CuttingTable.tsx'

import '../../src/components/style/menuRepairs.scss'

function Cutting() {
  return (
    <div className={'cuting'}>
			<BrendMenu/>
			<CutingTable/>
    </div>
  )
}

export default Cutting