import { useFormik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux';
import { startSearch } from '../../actions/infoApi';
import validate from '../../constant/validate';

export const Search = () => {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            search: ""
        },
        validate,
        onSubmit: value => dispatch( startSearch( value )  )
    });

    return (
        <div className="mb-5">
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
