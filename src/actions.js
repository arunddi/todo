
import { getTodoApi } from './api';

export const getTodos = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: 'FETCHING_TODOS'
            });
    
            const todos = await getTodoApi();

            dispatch({ type: 'SAVE_TODOS', payload: todos });

        } catch(err) {

        }
    }
};

