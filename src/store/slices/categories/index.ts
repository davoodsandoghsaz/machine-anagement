import { combineReducers } from 'redux'
import listReducer, { listActions } from './list'

export const categoriesReducer = combineReducers({
    list: listReducer
})

export const categoriesActions = {
    list: listActions
}
