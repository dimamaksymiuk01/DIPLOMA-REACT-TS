// import { useEffect, useState} from "react";
//
//
// export const SetForm = () => {
//     const [commit, setCommit] = useState("");
//
//     const handleFormSubmit = async (data: any) => {
//         const comment = commit;
//         const currentDate = moment().format('YYYY-MM-DD');
//         const master = userMaster;
//         await setDataToFirebase(PathData.markets, {...data, comment, master, currentDate}).then(() => {
//             // console.log("Done")
//         })
//         formRegister.reset()
//     };
//
//     const formRegister = useForm({
//         mode: "onBlur",
//         defaultValues,
//         resolver: yupResolver(schemaRegister),
//     });
//     const {
//         formState: {errors}
//     } = formRegister;
//
//     //витягування з локалстореджа майстра (user)
//     const [userMaster, setUserMaster] = useState<string | null>(null);
//     useEffect(() => {
//       const userMasterData = localStorage.getItem('user');
//       if (userMasterData) {
//         const parsedUserMaster = JSON.parse(userMasterData);
//         setUserMaster(parsedUserMaster);
//         // console.log(parsedUserMaster);
//       }
//     }, []);
//
//
//
//     return (
//         <>
//             <FormProvider {...formRegister}>
//                 <form name={"form-main"} onSubmit={formRegister.handleSubmit(handleFormSubmit)}>
//                     <div className={"infoMarkets"}>
//
//                         <div className={"textInputs"}>
//
//                             <Select field = {"market"} />
//
//                             <div className={'inpValid'}>
//                             <InputGroup
//                                 type={"text"}
//                                 name={"client"}
//                                 placeholder="Client"
//                                 classNameInput={"form__input"}
//                                 classNameInputWrapper={"form__group"}
//                                 classNameLabel={"form__label"}
//                                 field={"client"}
//                             />
//                             {errors?.client && (<Stack className={'errAlert'} sx={{ width: '100%' }} spacing={2}><Alert severity="warning">{errors.client.message}</Alert></Stack>)}
//                             </div>
//
//                             <div className={'inpValid'}>
//                             <InputGroup
//                                 type={"text"}
//                                 name={"device"}
//                                 placeholder="Device model"
//                                 classNameInput={"form__input"}
//                                 classNameInputWrapper={"form__group"}
//                                 classNameLabel={"form__label"}
//                                 field={"device"}
//                             />
//                             {errors?.device && (<Stack className={'errAlert'} sx={{ width: '100%' }} spacing={2}><Alert severity="warning">{errors.device.message}</Alert></Stack>)}
//                             </div>
//
//                             <div className={'inpValid'}>
//                             <InputGroup
//                                 type={"text"}
//                                 name={"product"}
//                                 placeholder="Product"
//                                 classNameInputWrapper={"form__group"}
//                                 classNameInput={"form__input"}
//                                 classNameLabel={"form__label"}
//                                 field={"product"}
//                             />
//                             {errors?.product && (<Stack className={'errAlert'} sx={{ width: '100%' }} spacing={2}><Alert severity="warning">{errors.product.message}</Alert></Stack>)}
//                             </div>
//
//                             <div className={'inpValid'}>
//                             <InputGroup
//                                 type={"date"}
//                                 name={"date"}
//                                 classNameInputWrapper={"form__group"}
//                                 classNameInput={"waitDate"}
//                                 field={"date"}
//                             />
//                             {errors?.date && (<Stack className={'errAlert'} sx={{ width: '100%' }} spacing={2}><Alert severity="warning">{errors.date.message}</Alert></Stack>)}
//                             </div>
//                             <BasicModal onSubmit={setCommit}/>
//                         </div>
//                     </div>
//                     <ColorButtons/>
//                 </form>
//             </FormProvider>
//         </>
//     );
// };
