import {NotificationReducer} from './reducers/NotificationReducer';
import {createStore} from 'redux';

const storeCreator = createStore as any;

export const store = storeCreator(NotificationReducer);