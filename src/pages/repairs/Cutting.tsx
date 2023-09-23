import BrendMenu from './BrendMenu.tsx'
import CutingTable from './CuttingTable.tsx'
import SetRepairsCuting from './SetRepairsCuting.tsx'

import '../../components/style/menuRepairs.scss'

function Cutting() {
  return (
    <div className={'cuting'}>
			<BrendMenu/>
			<div className={'rightRep'}>
				<SetRepairsCuting/>
				<CutingTable/>
			</div>
    </div>
  )
}

export default Cutting