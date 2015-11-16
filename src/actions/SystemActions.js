import dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';

class SystemActions {
  addValue(value) {
    dispatcher.dispatch({
      'type': ActionTypes.ADD_VALUE,
      'value': value,
    });
  }

  removeValue(value) {
    dispatcher.dispatch({
      'type': ActionTypes.REMOVE_VALUE,
      'value': value,
    });
  }
}
export default new SystemActions();
