import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    loading: false,
    todos: []
};

const reducer = (state=initialState, action) => {

    switch(action.type) {
        case 'ADD_TODO': {
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: action.id,
                        name: action.name,
                        completed: action.completed
                    }
                ]
            };
        }

        case 'SAVE_TODOS': {
            return {
                ...state,
                loading: false,
                todos: [
                    ...state.todos,
                    ...action.payload
                ]
            }
        }

        case 'FETCHING_TODOS': {
            return {
                ...state,
                loading: true
            }
        }

        case 'DELETE_TODO': {

        }

        default: 
            return state;
    }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
