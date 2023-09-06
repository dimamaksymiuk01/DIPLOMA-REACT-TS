import { useForm, FormProvider } from 'react-hook-form';
import { MyProducts } from '../../shared/types/types.ts';
import { PathData, setDataToFirebase } from '../../services/firebase/writeDataToFirebase.ts';
import InputGroup from '../../components/Input/Input.tsx';

import '../../components/style/storage.scss';
import ColorButtons from '../../components/ButtonMarkets.tsx'

function SetStorage() {
  const formRegister = useForm<MyProducts>({
    mode: "onBlur",
    defaultValues: {}
  });

  const handleFormStorage = async (data: MyProducts) => {
    try {
      const newData = {
        ...data,
      };

      // Викликаємо функцію для запису в базу даних Firebase
      await setDataToFirebase(PathData.storage, newData);
			formRegister.reset();
      console.log("Data sent to Firebase:", newData);
    } catch (error) {
      console.error("Error sending data to Firebase:", error);
    }
  };

  return (
    <FormProvider {...formRegister}>
      <form onSubmit={formRegister.handleSubmit(handleFormStorage)}>
        <div className={'SetStorage'}>
          <div className={'inputsStorageLine'}>
            <div>
              <InputGroup
                type={"text"}
                name={"device"}
                placeholder="device"
                field={"device"}
              />
            </div>
            <div>
              <InputGroup
                type={"text"}
                name={"product"}
                placeholder="product"
                field={"product"}
              />
            </div>
            <div>
              <InputGroup
                type={"text"}
                name={"category"}
                placeholder="category"
                field={"category"}
              />
            </div>
            <div>
              <InputGroup
                type={"text"}
                name={"amount"}
                placeholder="amount"
                field={"amount"}
              />
            </div>
            <div>
              <InputGroup
                type={"text"}
                name={"price"}
                placeholder="price"
                field={"price"}
              />
            </div>
          </div>
          <div className={'btnStorage'}>
            <ColorButtons/>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

export default SetStorage;
