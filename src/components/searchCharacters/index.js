import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import  {useHistory,useLocation } from 'react-router';
import  queryString from 'query-string';
import { useDispatch } from 'react-redux';
import { startSearchInApi } from '../../actions/infoApi';



export const SearchCharacter = ( ) => {
   
    const history  = useHistory();
    const location = useLocation();
    const{ name = "" } = queryString.parse( location.search )    
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch( startSearchInApi( name ) )
    },[name, dispatch])

    const formik = useFormik({
        initialValues:{
            searchApi: name
        },
        onSubmit: (value) => {
            history.push( `?name=${value.searchApi}` );
        }
    });

    return (
        <div>
            <form onSubmit={ formik.handleSubmit }>
                <input
                className="input is-normal"
                placeholder="Type a name"
                name="searchApi"
                value={ formik.values.searchApi }
                onChange={ formik.handleChange }
                />
                <button

                className="button mt-5"
                type="submit"
                >Search</button>
            </form>
        </div>
    )
};
