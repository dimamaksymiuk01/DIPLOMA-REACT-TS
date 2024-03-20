import BrendMenu from './BrendMenu.tsx'
import SetRepairsDisplay from './setRepairs/SetRepairsDisplay.tsx'
import DisplayTable from './tables/DisplayTable.tsx'

function Displays() {
  return (
    <>
			<div className={'cuting'}>
			<BrendMenu/>
			<div className={'rightRep'}>
				<SetRepairsDisplay/>
				<DisplayTable/>
			</div>
				</div>
    </>
  )
}

export default Displays