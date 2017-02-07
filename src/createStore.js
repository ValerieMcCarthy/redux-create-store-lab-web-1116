

// solution
export default function createStore(reducer){
	let state;

	function getState(){
		return state
	}

	function dispatch(action){
		state = reducer(state, action)
		render()
	}

	dispatch({type: "@@INIT"})
	return {dispatch: dispatch, getState: getState}

}

function render(){
}




// The createStore function should return an object with two methods - getState, dispatch.
// getState should return the current state.
// dispatch should take in an action, update the state using the reducer, and call the render function.
// the render function doesn't need to actually do anything. You can just write a render function so that the dispatch method has something to call.
// 
// Note: Don't forget, you're initial state for each store should be set by the reducer. You'll have to dispatch some sort of 'initialize' action to get your state set!