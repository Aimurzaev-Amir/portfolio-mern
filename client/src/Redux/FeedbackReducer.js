const newFeedback = "FEEDBACKREDUCER/NEWFEEDBACK";
const feedbackError = "FEEDBACKREDUCER/FEEDBACKERROR";

let initialState = {
  Messages: [],
  error: null,
  status: false,
};

const FeedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case newFeedback:
      let feedback = {
        name: action.feedbackData.name,
        number: action.feedbackData.number,
        email: action.feedbackData.email,
        message: action.feedbackData.message,
      };
      return {
        ...state,
        Messages: [...state.Messages, feedback],
      };
    default:
      return state;
  }
};

export const addFeedback = (feedbackData) => {
  return {
    type: newFeedback,
    feedbackData,
  };
};

export const setError = (error) => {
  return {
    type: feedbackError,
    error,
  };
};

export default FeedbackReducer;
