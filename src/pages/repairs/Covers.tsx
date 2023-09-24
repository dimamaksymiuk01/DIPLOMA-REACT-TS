import BrendMenu from './BrendMenu.tsx'
import SetRepairsCovers from './setRepairs/SetRepairsCovers.tsx'
import CoversTable from './tables/CoversTable.tsx'

function Covers() {
  return (
    <>
			<div className={'cuting'}>
			<BrendMenu/>
			<div className={'rightRep'}>
				<SetRepairsCovers/>
				<CoversTable/>
			</div>
				</div>
    </>
  )
}

export default Covers