import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootExpenceTrackerReducer from '../Reducer/reducer'
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootExpenceTrackerReducer)
 
export let store = createStore(persistedReducer)
export let persistor = persistStore(store)

