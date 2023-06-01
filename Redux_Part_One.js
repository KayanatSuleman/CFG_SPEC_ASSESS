// Part 1 - Please refer to CFG_SPEC_ASSESSMENT as uploaded to Slack.
// Part 1.2 
function countReducer(state = initialState, action) { if (action.type === 'increment') {
    return {
    value: state.value + 1
    }; }
    if (action.type === 'decrement') { return {
    value: state.value - 1 };
    } return state;
    }
// Part 1.3
function countReducer(state = initialState, action) { if (action.type === 'increment') {
    return {
    value: state.value + 1
    }; }
    if (action.type === 'decrement') { return {
    value: state.value - 1 };
    }
    if (action.type === 'reset') {
     
    return initialState; }
    return state; }