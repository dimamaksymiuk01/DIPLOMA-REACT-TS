import { useForm, FormProvider } from 'react-hook-form';
import InputGroup from '../../../common/components/Input/Input.tsx';
import { setDataToFirebase, PathData } from '../../../common/services/firebase/writeDataToFirebase.ts';
import { MyProducts } from '../../../common/types/types.ts';
import ColorButtons from '../../../common/components/ButtonMarkets.tsx';
import { useRepairsContext } from '../RepairsContext.tsx'

import '../../../common/components/style/menuRepairs.scss'

export default function SetRepairsServices() {
  const { selectedBrend } = useRepairsContext();
  console.log(selectedBrend)

  const formRegister = useForm<MyProducts>({
    mode: "onBlur",
    defaultValues: {}
  });

  const handleFormRepairs = async (data: MyProducts) => {
    try {
      const newData = {
        ...data,
      };

      let databasePath = PathData.services;

      await setDataToFirebase(databasePath, newData);
      formRegister.reset();
      console.log("Data sent to Firebase:", newData);
    } catch (error) {
      console.error("Error sending data to Firebase:", error);
    }
  };

  return (
    <>
      <FormProvider {...formRegister}>
        <form onSubmit={formRegister.handleSubmit(handleFormRepairs)}>
          <div className={'setRep'}>
            <InputGroup
              type={"text"}
              name={"device"}
              placeholder="Client"
              field={"device"}
            />

            <InputGroup
              type={"text"}
              name={"price"}
              placeholder="Device model"
              field={"price"}
            />

          </div>
          <ColorButtons />
        </form>
      </FormProvider>
    </>
  )
}
