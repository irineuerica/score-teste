import getMonthsNames from '@/utils/getMonthsNames';
import React from 'react';
import {Controller, useFormContext } from 'react-hook-form';
import { NumericFormat } from 'react-number-format';

export default function TicketAverage() {
    const { control, formState: { errors } } = useFormContext();
    const meses = getMonthsNames();

    return (
        <div className="row">
                <p className="font-weight-normal mb-4">Informe o ticket médio da arena no ultimo trimestre.</p>
                {[0, 1, 2].map((index) => (
                    <div key={index} className="col-md-4 mb-3">
                        <label htmlFor={`ticketAverages[${index}]`} className="form-label font-semibold">{meses[index]}</label>
                        <Controller
                            name={`ticketAverages[${index}]`}
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <NumericFormat
                                    thousandSeparator="."
                                    decimalSeparator=","
                                    decimalScale={2}
                                    prefix="R$ "
                                    className="form-control"
                                    onChange={(value) => field.onChange(value.target.value)}
                                />
                            )}
                        />
                    </div>
                ))}
                 {errors.ticketAverages && <span className="text-danger">Campos obrigatórios</span>}
        </div>
    )
};
