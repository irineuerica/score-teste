export default function getMonthsNames(){
    const meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
      ];

    const date = new Date();
    var mes_1 =  meses[date.getMonth()-3];
    var mes_2 =  meses[date.getMonth()-2];
    var mes_3 =  meses[date.getMonth()-1];

    return [mes_1, mes_2, mes_3]
}