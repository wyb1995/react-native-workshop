export default phoneContactList = (state = [], action) => {
    switch (action.type) {
        case "FETCH_PHONE_CONTACT_LIST":
            return action.data;
        default:
            return state;
    }
}