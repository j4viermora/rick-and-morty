import { useFormik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { startSearch } from '../../actions/infoApi';
import validate from '../../constant/validate';

export const Search = () => {

    const dispatch = useDispatch()

    const { pathname } = useLocation()

    const formik = useFormik({
        initialValues: {
            search:""
        },
        validate,
        onSubmit: value => dispatch( startSearch( value, pathname.substring(1) ) )   
    });

    return (
        <div >
            <form onSubmit={ formik.handleSubmit } className="control">
                <input 
                className="input" 
                type="text" 
                placeholder="What is your search?"
                id="search"
                name="search"
                onChange={ formik.handleChange }
                value={ formik.values.search }
                autoComplete="off"            
                />
            </form>
            {formik.errors.search ? <div>Your search should more two character</div> : null}
        </div>
    )
}
