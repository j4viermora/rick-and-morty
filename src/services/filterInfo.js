

export const filterInfo = ( filter, local ) => {
       console.log(local)
       const toFilter = JSON.parse(sessionStorage.getItem( local )) || null 
       
       filter = filter.trim().toLocaleLowerCase();
       const  filtered = toFilter.results.filter( fil => fil.name.trim().toLocaleLowerCase().includes( filter ) || fil.status.trim().toLocaleLowerCase().includes( filter ) );

       return filtered
};
