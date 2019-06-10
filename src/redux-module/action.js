import store from "./store";

const increment = () => {
	store.dispatch({ 
        type: "INCREMENT",
        payload: 1
    });
};

const decrement = () => {
	store.dispatch({
        type: "DECREMENT",
        payload: 1
	});
};

export default {
    increment,
    decrement
}
