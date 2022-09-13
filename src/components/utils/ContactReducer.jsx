export default function reducer(state, action) {
  switch (action.type) {
    case "setFormData": {
      return {
        ...state,
        [action.data.name]: action.data.value,
      };
    }
    case "setUserMessage": {
      return {
        ...state,
        userMessage: action.data,
      };
    }
    case "setTextColor": {
      return {
        ...state,
        textColor: action.data,
      };
    }
    case "setCardColor": {
      return {
        ...state,
        cardColor: action.data,
      };
    }

    default:
      return state;
  }
}
