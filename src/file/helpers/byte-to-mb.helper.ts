/**
 * Transformacion de un valor de bytes a MegaBytes
 * @param bytes Numero de bytes
 * @returns Peso de los bytes en MB
 */
export const byteToMB = ( bytes: number ): number => {
    const mb = bytes * Math.pow( 10, -6 )
    return parseFloat( mb.toFixed(4) );
}
