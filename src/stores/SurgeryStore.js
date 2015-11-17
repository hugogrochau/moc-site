import {EventEmitter} from 'events';
import http from '../core/HttpClient';

let _surgeries = [];

async function getSurgeries() {
  try {
    const response = await http.get('http://hugo.grochau.com/moc-api/public/index.php/api/hospital/5/surgery');
    _surgeries = response.surgeries;
    store.emit('change');
  } catch (err) {
    console.log(err);
  }
}

class SurgeryStore extends EventEmitter {

  constructor() {
    super();
    getSurgeries();
  }

  getAll() {
    return _surgeries;
  }

  addChangeListener(callback) {
    this.on('change', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }

}

const store = new SurgeryStore();

export default store;
