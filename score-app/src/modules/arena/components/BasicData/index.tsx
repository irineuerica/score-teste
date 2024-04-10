import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import MaskedInput from 'react-input-mask';
import { useZipCode } from '../../hooks/useZipCode';


export default function BasicData() {
    const { register, control, formState: { errors }, setError, clearErrors, watch } = useFormContext();
    const { handleValidateCep } = useZipCode();

    const cepIsValid = async (zipCode: string) => {
        try {
            const address = await handleValidateCep(zipCode)
            if (address.erro) {
                setError('zipCode', {type: "custom", message: 'CEP inválido'});
                return;
            } 
            if(address.uf !== 'SP'){
                setError('zipCode', {type: "custom", message: `O estado ${address.uf} não está qualificado no momento.`});
                return;
            }        
            else {
                clearErrors('zipCode');
                return;
            }
        } catch (error) {
            setError('zipCode', {message: 'CEP inválido'});
        }
    };

    return (
        <div className="row">
            <h5 className="text-lg font-bold mb-3">Dados da arena</h5>
            <div className="col-md-6 mb-3">
                <label htmlFor="name" className="form-label font-semibold">Nome</label>
                <input type="text" id="name" className="form-control" {...register("name", { required: true })} placeholder='Nome'/>
                {errors.name && <span className="text-danger">Campo obrigatório</span>}
            </div>

            <div className="col-md-6 mb-3">
                <label htmlFor="whatsapp" className="form-label font-semibold">WhatsApp</label>
                <Controller
                    name="whatsapp"
                    rules={{ required: true }}
                    control={control}
                    render={({ field }) => (
                        <MaskedInput
                            placeholder='WhatsApp'
                            mask="(99) 99999-9999"
                            id="whatsapp"
                            className="form-control"
                            onChange={(value) => field.onChange(value.target.value)}
                        />
                    )}
                />
                {errors.whatsapp && <span className="text-danger">Campo obrigatório</span>}
            </div>

            <div className="col-md-6 mb-3">
                <label htmlFor="zipCode" className="form-label font-semibold">CEP</label>
                <Controller
                    name="zipCode"
                    rules={{ required: true }}
                    control={control}
                    render={({ field }) => (
                        <MaskedInput
                            placeholder='CEP'
                            mask="99999-999"
                            id="zipCode"
                            className="form-control"
                            onBlur={(e) => cepIsValid(e.target.value)}
                            onChange={(value) => field.onChange(value.target.value)}
                        />
                    )}
                />
                {errors.zipCode && <span className="text-danger">{errors.zipCode?.message?.toString()}</span>}
            </div>


        </div>
    )
};
