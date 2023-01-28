import { Action } from 'redux'
import { put, takeLatest } from 'redux-saga/effects'
import { rootActions } from '../../slices'

const { onRequest } = rootActions.categories.list

function* listSagaTask({ payload }) {
    try {
        const params = {}
    } catch (error) {
    }
}

function* listSaga(): any {
    yield takeLatest(onRequest, listSagaTask)
}

export default listSaga
