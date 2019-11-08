export const getTodoApi = () => {
    const todos = [{
        id: 1,
        name: "Todo 1",
        completed: false
      },
      {
        id: 2,
        name: "Todo 2",
        completed: false
      },
      {
        id: 3,
        name: "Todo 3",
        completed: false
      }];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(todos);
        }, 2000)
    });
};


