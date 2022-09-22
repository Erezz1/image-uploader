export const byteToMB = ( bytes: number ): number => {
    const mb = bytes * Math.pow( 10, -6 )
    return parseFloat( mb.toFixed(4) );
}
