export default logger = (store) => next => action => {
    console.log("middleware logger!");
    return next(action);
}