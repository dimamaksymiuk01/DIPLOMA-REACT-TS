import SetRepairsServices from './setRepairs/SetRepairsServices.tsx'
import ServicesTable from './tables/ServicesTable.tsx'

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