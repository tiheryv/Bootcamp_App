const initialState = {
  'message': '',
  'content': [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'FETCH_HOMEWORK_SUCCESS':
      return {
        ...state, ...payload,
      };
    default:
      return state;
  }
}
