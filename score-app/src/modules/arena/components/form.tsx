import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formValidatorSchema } from '@/modules/arena/validators/form-validator-schema';
import { ArenaDataForm } from '@/modules/interfaces/arena-data-form.interface';
import { useArenaValidation } from '../hooks/useArenaValidation';
import BasicData from './BasicData';
import PeopleCount from './PeopleCount';
import TicketAverage from './TicketAverage';
import Result from './Result';


export default function ArenaValidationForm() {
    const { handleValidateArena } = useArenaValidation()
    const [result, setResult] = useState<ArenaResultValidation>()
    const methods = useForm({
        resolver: yupResolver(formValidatorSchema),
        defaultValues: {
            name: '',
            whatsapp: '',
            zipCode: '',
            peopleCount: [],
            ticketAverages: [],
        }
    });


    const onSubmit = async (data: ArenaDataForm) => {
        const formatedTickets = data.ticketAverages.map((item) => {
            return item.replace('R$', '')
                .trim()
                .replace('.', '')
                .replace(',', '.') || ''
        })
        const arena = await handleValidateArena({ ...data, ticketAverages: formatedTickets })
        setResult(arena)    
    };

    return (
        <FormProvider {...methods}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card mt-3 shadow p-3 bg-white rounded-lg">
                            <form className="card-body cardbody-color p-lg-5">
                                {result ? <Result isQualified={result.isQualified} totalPeopleCount={result.totalPeopleCount} totalTicketAverage={result.totalTicketAverage} /> :
                                    <>
                                        <div className="mb-3">
                                            <BasicData />
                                        </div>
                                        <div className="mb-3">
                                            <PeopleCount />
                                        </div>
                                        <div className="mb-3">
                                            <TicketAverage />
                                        </div>
                                        <div className="text-center">
                                            <button className="btn bg-score_primary  hover:bg-score_primary font-semibold col-6 btn-md mt-3"
                                                onClick={methods.handleSubmit(onSubmit)}>Enviar</button>
                                        </div>
                                    </>
                                }
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </FormProvider>
    )
};
