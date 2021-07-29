const initialState = {
  'loading': false,
  'message': '',
  'content': {
    'id': 0,
    'day': 0,
    'summary': '',
    'topic': '',
    'coverURL': null,
    'trainerDTO': {
      'id': 1,
      'firstName': '',
      'lastName': '',
      'email': '',
      'location': '',
      'summary': '',
      'urlImage': null,
      'training': {
        'id': 0,
        'trainingName': '',
        'status': true,
        'initialDate': '',
        'finalDate': '',
      },
      'status': false,
    },
    'trainingDTO': {
      'id': 0,
      'trainingName': '',
      'status': true,
      'initialDate': '',
      'finalDate': '',
    },
    'resourceDTOList': [],
    'homeworkRDTOList': [],
  },
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'FETCH_SCHEDULE_SUCCESS':
      return {
        ...state, ...payload,
      };
    default:
      return state;
  }
}
