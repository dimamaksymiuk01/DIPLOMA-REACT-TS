import Header from "../../components/header/Header.tsx";
import { TableStorage } from './TableStorage.tsx'
import SetStorage from './SetStorage.tsx'

function Storage() {

  return (
    <>
      <Header/>
      <SetStorage/>
      <TableStorage/>
    </>
  )
}

export default Storage