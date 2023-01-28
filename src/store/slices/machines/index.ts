import { combineReducers } from 'redux'
import listReducer, { listActions } from './list'

export const machinesReducer = combineReducers({
    list: listReducer
})

export const machinesActions = {
    list: listActions
}
