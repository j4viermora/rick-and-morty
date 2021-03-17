export const filterInfo = ( toFilter, filter ) => {

       const  filtered = toFilter.filter( fil => fil.name !== filter )

       return filtered

}