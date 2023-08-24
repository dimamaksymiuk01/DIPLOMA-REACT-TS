import { useEffect, useState } from 'react'
// import * as moment from 'moment'
import { PathData, setDataToFirebase } from '../../services/firebase/writeDataToFirebase.ts'
import { FormProvider, useForm } from 'react-hook-form'
import InputGroup from '../../components/Input/Input.tsx'
import Stack from '@mui/material/Stack'
import { Alert } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaRegister } from '../../shared/consts/schemaRegister.ts'
import { BasicModal } from './Modal.tsx'
import ColorButtons from './ButtonM.tsx'
import { defaultValues } from '../../shared/consts/defaultValues.ts'
import { SelectMarket } from './Select.tsx'
import moment from 'moment' // Імпорт Moment.js
import '../../components/style/setForms.scss'
import { useFirebaseData } from '../../services/firebase/getDataFromFirebase.ts'

export const SetForm = () => {
    const [commit, setCommit] = useState("");
    const ff = useFirebaseData(PathData.markets);
    console.log(ff, "hhh");
    const handleFormSubmit = async (data: any) => {
        // console.log(data);

        const comment = commit;
        const currentDate = moment().format('YYYY-MM-DD');
        const master = userMaster;
        await setDataToFirebase(PathData.markets, {...data, comment, master, currentDate}).then(() => {
            console.log("Done")
        })
        // formRegister.reset()
    };

    const formRegister = useForm({
        mode: "onBlur",
        defaultValues,
        resolver: yupResolver(schemaRegister),
    });
    const {
        formState: {errors}
    } = formRegister;

    //витягування з локалстореджа майстра (user)
    const [userMaster, setUserMaster] = useState<string | null>(null);
    useEffect(() => {
      const userMasterData = localStorage.getItem('user');
      if (userMasterData) {
        const parsedUserMaster = JSON.parse(userMasterData);
        setUserMaster(parsedUserMaster);
        // console.log(parsedUserMaster);
      }
    }, []);


    return (
        <>
            <FormProvider {...formRegister}>
                <form name={"form-main"} onSubmit={formRegister.handleSubmit(handleFormSubmit)}>
                    <div className={"infoMarkets"}>

                        <div className={"textInputs"}>

                            <SelectMarket field = {"market"} />

                            <div className={'inpValid'}>
                            <InputGroup
                                type={"text"}
                                name={"client"}
                                placeholder="Client"
                                classNameInput={"form__input"}
                                classNameInputWrapper={"form__group"}
                                classNameLabel={"form__label"}
                                field={"client"}
                            />
                            {errors?.client && (<Stack className={'errAlert'} sx={{ width: '100%' }} spacing={2}><Alert severity="warning">{errors.client.message}</Alert></Stack>)}
                            </div>

                            <div className={'inpValid'}>
                            <InputGroup
                                type={"text"}
                                name={"device"}
                                placeholder="Device model"
                                classNameInput={"form__input"}
                                classNameInputWrapper={"form__group"}
                                classNameLabel={"form__label"}
                                field={"device"}
                            />
                            {errors?.device && (<Stack className={'errAlert'} sx={{ width: '100%' }} spacing={2}><Alert severity="warning">{errors.device.message}</Alert></Stack>)}
                            </div>

                            <div className={'inpValid'}>
                            <InputGroup
                                type={"text"}
                                name={"product"}
                                placeholder="Product"
                                classNameInputWrapper={"form__group"}
                                classNameInput={"form__input"}
                                classNameLabel={"form__label"}
                                field={"product"}
                            />
                            {errors?.product && (<Stack className={'errAlert'} sx={{ width: '100%' }} spacing={2}><Alert severity="warning">{errors.product.message}</Alert></Stack>)}
                            </div>

                            <div className={'inpValid'}>
                            <InputGroup
                                type={"date"}
                                name={"date"}
                                classNameInputWrapper={"form__group"}
                                classNameInput={"waitDate"}
                                field={"date"}
                            />
                            {errors?.date && (<Stack className={'errAlert'} sx={{ width: '100%' }} spacing={2}><Alert severity="warning">{errors.date.message}</Alert></Stack>)}
                            </div>
                            <BasicModal onSubmit={setCommit}/>
                        </div>
                        <ColorButtons/>
                    </div>

                </form>
            </FormProvider>
        </>
    );
};