
import '../../components/style/menuRepairs.scss'
import SetRepairsAccumulators from './SetRepairsAccumulators.tsx'
import AccumulatorTable from './AccumulatorTable.tsx'
import BrendMenu from './BrendMenu.tsx'

function Accumulators() {
  return (
    <>
			<div className={'cuting'}>
			<BrendMenu/>
			<div className={'rightRep'}>
				<SetRepairsAccumulators/>
				<AccumulatorTable/>
			</div>
				</div>
    </>
  )
}

export default Accumulators