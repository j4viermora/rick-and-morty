import {combineReducers} from 'redux';
import userReducer from './userReducer';
import { charactersReducer } from './charactersReducer';
import episodesReducers from './apisodesReducers';

export const rootReducers = combineReducers({
    characters: charactersReducer,
    apisoder: episodesReducers,
    user: userReducer
})