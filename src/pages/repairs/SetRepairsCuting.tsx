import { useForm, FormProvider } from 'react-hook-form';
import InputGroup from '../../components/Input/Input.tsx';
import { setDataToFirebase, PathData } from '../../services/firebase/writeDataToFirebase.ts';
import { MyProducts } from '../../shared/types/types.ts';
import ColorButtons from '../../components/ButtonMarkets.tsx';
import { useRepairsContext } from './RepairsContext.tsx'

import '../../components/style/menuRepairs.scss'

export default function SetRepairsCuting() {
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

      // Визначте шлях до бази даних на основі значення selectedBrend
      let databasePath = PathData.applecuting; // Значення за замовчуванням

      if (selectedBrend === 'Samsung') {
        databasePath = PathData.samsungcuting;
      } else if (selectedBrend === 'Xiaomi') {
        databasePath = PathData.xiaomicuting;
      } else if (selectedBrend === 'Redmi') {
        databasePath = PathData.redmicuting;
      } else if (selectedBrend === 'Google') {
        databasePath = PathData.googlecuting;
      } else if (selectedBrend === 'Oppo') {
        databasePath = PathData.oppocuting;
      } else if (selectedBrend === 'Motorola') {
        databasePath = PathData.motorolacuting;
      } else if (selectedBrend === 'OnePlus') {
        databasePath = PathData.onepluscuting;
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
