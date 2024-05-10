import { put, takeEvery } from 'redux-saga/effects'
import { PRODUCT_LIST, SET_PRODUCT_LIST } from './constant'

function* getProducts(){
    let listData = yield fetch('http://localhost:3500/products');
    listData = yield listData.json();
    console.log("action is called", listData);
    yield put({type: SET_PRODUCT_LIST, listData})
}

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
}

export default productSaga;