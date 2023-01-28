import { combineReducers } from 'redux'
import { machinesReducer, machinesActions } from './machines'
import { categoriesReducer, categoriesActions } from './categories'

export const rootReducer = combineReducers({
    machines: machinesReducer,
    categories: categoriesReducer
})

export const rootActions = {
    machines: machinesActions,
    categories: categoriesActions
}