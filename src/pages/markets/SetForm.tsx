import { useEffect, useState } from 'react'
import { PathData, setDataToFirebase } from '../../services/firebase/writeDataToFirebase.ts'
import { FormProvider, useForm } from 'react-hook-form'
import InputGroup from '../../components/Input/Input.tsx'
import Stack from '@mui/material/Stack'
import { Alert } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaRegister } from '../../shared/consts/schemaRegister.ts'
import { BasicModal } from '../../components/Modal.tsx'
import ColorButtons from '../../components/ButtonMarkets.tsx'
import { defaultValues } from '../../shared/consts/defaultValues.ts'
import moment from 'moment'
import { useFirebaseData } from '../../services/firebase/getDataFromFirebase.ts'
import { Select } from '../../components/Select.tsx'

import '../../components/style/setForms.scss'


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
        formRegister.reset()
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

                            <Select field={"market"} />

                            <div className={'inpValid'}>
                            <InputGroup
                                type={"text"}
                                name={"client"}
                                placeholder="Client"
                                field={"client"}
                            />
                            {errors?.client && (<Stack className={'errAlert'} sx={{ width: '100%' }} spacing={2}><Alert severity="warning">{errors.client.message}</Alert></Stack>)}
                            </div>

                            <div className={'inpValid'}>
                            <InputGroup
                                type={"text"}
                                name={"device"}
                                placeholder="Device model"
                                field={"device"}
                            />
                            {errors?.device && (<Stack className={'errAlert'} sx={{ width: '100%' }} spacing={2}><Alert className={'test'} severity="warning">{errors.device.message}</Alert></Stack>)}
                            </div>

                            <div className={'inpValid'}>
                            <InputGroup
                                type={"text"}
                                name={"product"}
                                placeholder="Product"
                                field={"product"}
                            />
                            {errors?.product && (<Stack className={'errAlert'} sx={{ width: '100%' }} spacing={2}><Alert severity="warning">{errors.product.message}</Alert></Stack>)}
                            </div>

                            <div className={'inpValidDate'}>
                            <InputGroup
                                type={"date"}
                                name={"date"}
                                field={"date"}
                                className={'inpDate'}
                            />

                            {errors?.date && (<Stack className={'errAlert'} sx={{ width: '100%' }} spacing={2}><Alert severity="warning">{errors.date.message}</Alert></Stack>)}
                            </div>
                            <BasicModal onSubmit={setCommit}/>

                            <ColorButtons/>

                        </div>

                    </div>

                </form>
            </FormProvider>
        </>
    );
};