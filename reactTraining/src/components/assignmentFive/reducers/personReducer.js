export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PERSON":
      const newPerson = {
        id: Math.random() * 50000000,
        name: action.name,
        age: action.age
      };
      return { persons: [...state.persons, newPerson] };
    case "DELETE_PERSON":
      // console.log(action.id)
      return {
        persons: [...state.persons.filter(person => person.id !== action.id)]
      };
    default:
      break;
  }
};
