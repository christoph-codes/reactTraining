const initialState = {persons: []};

function reducer(state, action) {
    switch(action.type) {
        case 'ADD_PERSON':
            const newPerson = {
                id: Math.random() * 50000000,
                name: "Christopher",
                age: Math.floor(Math.random() * 50)
            };
            return {persons: [...state.persons, newPerson]};
        case 'DELETE_PERSON':
            let prev = [...state.persons]
            return { persons: [prev, prev.filter(person => person.id !== action.id)]};
    }
}