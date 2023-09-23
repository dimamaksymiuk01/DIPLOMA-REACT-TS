import BrendMenu from './BrendMenu.tsx'
import SetRepairsServices from './SetRepairsServices.tsx'
import ServicesTable from './ServicesTable.tsx'

function Services() {
  return (
    <>
			<div className={'cuting'}>
			<div className={'rightRep'}>
				<SetRepairsServices/>
				<ServicesTable/>
			</div>
				</div>
    </>
  )
}

export default Services