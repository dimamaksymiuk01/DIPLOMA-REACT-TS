import BrendMenu from './BrendMenu.tsx'
import CoversTable from './TableCovers.tsx'
import SetRepairsCovers from './SetRepairsCovers.tsx'

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