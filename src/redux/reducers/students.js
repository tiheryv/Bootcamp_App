const initialState = {
  auth: false,
  loading: false,
  message: '',
  content: {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    summary: '',
    training: {
      id: 0,
      trainingName: '',
      status: true,
      initialDate: '',
      finalDate: '',
    },
  },
  status: '',
  type: 'student',
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'CHANGE_PROFILE_INFO':
      return {
        ...state,
        content: { ...state.content, ...payload },
      };
    case 'FETCH_USER_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        content: payload,
      };
    case 'LOGIN_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        auth: true,
        content: payload,
      };
    case 'USER_TYPE':
      return {
        ...state,
        type: payload,
      };
    case 'FETCH_USER_FAILURE':
      return {
        loading: false,
        error: payload,
      };
    case 'FAKE_LOGIN_SUCCESS':
      return {
        loading: false,
        auth: payload,
      };
    default:
      return state;
  }
}

