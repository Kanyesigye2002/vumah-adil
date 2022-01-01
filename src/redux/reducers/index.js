import { combineReducers } from 'redux';
import {MapCenter, MapSearch, SelectedVehicleOnMap} from './MapReducer'
import {Vehicles, VehicleCategories, VehicleFeatures, VehicleModels, VehicleManufacturers, VehicleEnergySources} from './Vehicles'
import {Booking, BreakDownReasons, BookingChangeRequests} from './Booking'
import {Groups} from './Groups'
import {User} from './User'

const rootReducer = combineReducers({
    MapCenter, MapSearch, SelectedVehicleOnMap,
    Vehicles, VehicleCategories, VehicleFeatures, VehicleModels, VehicleManufacturers, VehicleEnergySources,
    Booking, BreakDownReasons, BookingChangeRequests,
    Groups,
    User
})

export default rootReducer;