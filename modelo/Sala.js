const ASIENTO_VIP = 1;
const ASIENTO_COMUN = 0;

export class Sala
{
    constructor(nro)
    {
        this.numero = nro;
        this.asientos = [
            [ASIENTO_VIP, ASIENTO_VIP,ASIENTO_VIP],
            [ASIENTO_COMUN,ASIENTO_COMUN,ASIENTO_COMUN],
            [ASIENTO_COMUN,ASIENTO_COMUN,ASIENTO_COMUN],
        ];
    }
}