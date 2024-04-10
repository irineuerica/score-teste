
import { useRouter } from 'next/router';
import React from 'react';

export default function Result({ isQualified, totalTicketAverage, totalPeopleCount }: ArenaResultValidation) {
    const router = useRouter()

    return (
        <div className="row">
            <h5 className="text-lg font-bold mb-3 text-center">Resultado</h5>
            {isQualified ?
                <p className="text-lgfont mb-3 font-semibold text-green-600 text-center">A arena atende aos critérios para eventos sociais!</p> :
                <p className=" text-lg mb-3 font-semibold text-red-700 text-center">Infelizmente a arena não atende aos critérios para eventos sociais.</p>
            }
            <p>Total de pessoas que frequentaram a arena no ultimo trimestre: {totalPeopleCount}</p>
            <p>Total to ticket médio do ultimo trimestre: R${totalTicketAverage}</p>

            <button className="btn bg-black text-white  hover:bg-black font-semibold btn-md mt-10 self-center"
             onClick={() => router.push('/')}>Voltar ao formulário</button>
        </div>
    )
};
