import getMonthsNames from '@/utils/getMonthsNames';
import React from 'react';
import {useFormContext } from 'react-hook-form';


export default function PeopleCount() {
    const { register, formState: { errors } } = useFormContext();
    const meses = getMonthsNames()
    return (
        <div className="row">
            <p className="font-weight-normal mb-4">Informe a quantidade de pessoas que frequentaram a arena no ultimo trimestre.</p>
            {[0, 1, 2].map((index: number) => (
                <div key={index} className="col-md-4 mb-3">
                    <label htmlFor={`peopleCount[${index}]`} className="form-label font-semibold">{meses[index]}</label>
                    <input type="number" min={0} id={`peopleCount[${index}]`} className="form-control" {...register(`peopleCount[${index}]`, { required: true })} />
                </div>
            ))}
            {errors.peopleCount && <span className="text-danger">Campos obrigatórios</span>}
        </div>
    )
};
