import { combineReducers } from "redux";
import phoneContactList from './phoneContactList';

const phoneContactListApp = combineReducers(
    phoneContactList
);

export default phoneContactList;