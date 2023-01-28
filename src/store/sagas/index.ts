import { all } from '@redux-saga/core/effects'
import machinesSaga from './machines'
import categoriesSaga from './categories'

function* rootSaga() {
    yield all([
        ...machinesSaga,
        ...categoriesSaga
    ])
}

export default rootSaga