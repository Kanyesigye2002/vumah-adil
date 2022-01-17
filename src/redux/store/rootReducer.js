import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// slices
import chatReducer from '../slices/chat';
import userReducer from '../slices/user';
import { User } from '../reducers/User';
import { MapCenter, MapSearch, SelectedVehicleOnMap } from '../reducers/MapReducer';
import { Token } from '../reducers/Token';

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: []
};

const rootReducer = combineReducers({
  chat: chatReducer,
  user: userReducer,
  testUser: User,
  MapCenter, MapSearch, SelectedVehicleOnMap, Token
});

export { rootPersistConfig, rootReducer };
