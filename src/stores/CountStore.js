import {EventEmitter} from 'events';
import dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';

let _count = 0;

async function addCount(value) {
  _count += value;
  store.emit('change');
}

async function removeCount(value) {
  _count -= value;
  store.emit('change');
}

function handleDispatch(action) {
  switch (action.type) {
  case ActionTypes.ADD_VALUE:
    addCount(action.value);
    store.emit('change');
    break;
  case ActionTypes.REMOVE_VALUE:
    removeCount(action.value);
    store.emit('change');
    break;
  default:
  }
}

class CountStore extends EventEmitter {
  constructor() {
    super();

    dispatcher.register(handleDispatch);
  }

  getCount() {
    return _count;
  }
}

const store = new CountStore();
export default store;
