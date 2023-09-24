import { useForm, FormProvider } from 'react-hook-form';
import InputGroup from '../../../components/Input/Input.tsx';
import { setDataToFirebase, PathData } from '../../../services/firebase/writeDataToFirebase.ts';
import { MyProducts } from '../../../shared/types/types.ts';
import ColorButtons from '../../../components/ButtonMarkets.tsx';
import { useRepairsContext } from '../RepairsContext.tsx'

import '../../../components/style/menuRepairs.scss'

export default function SetRepairsDisplay() {
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

      let databasePath = PathData.appledisplay; // Значення за замовчуванням

      if (selectedBrend === 'Samsung') {
        databasePath = PathData.samsungdisplay;
      } else if (selectedBrend === 'Xiaomi') {
        databasePath = PathData.xiaomidisplay;
      } else if (selectedBrend === 'Redmi') {
        databasePath = PathData.redmiadisplay;
      } else if (selectedBrend === 'Google') {
        databasePath = PathData.googledisplay;
      } else if (selectedBrend === 'Oppo') {
        databasePath = PathData.oppodisplay;
      } else if (selectedBrend === 'Motorola') {
        databasePath = PathData.motoroladisplay;
      } else if (selectedBrend === 'OnePlus') {
        databasePath = PathData.oneplusdisplay;
      }

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

            <InputGroup
              type={"text"}
              name={"additionally"}
              placeholder="Additionally"
              field={"additionally"}
            />
          </div>
          <ColorButtons />
        </form>
      </FormProvider>
    </>
  )
}
