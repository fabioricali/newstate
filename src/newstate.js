module.exports = (currentState, fn) => {
    const draftState = Object.assign([], currentState);
    fn.call(this, draftState);
};