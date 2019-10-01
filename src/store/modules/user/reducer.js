import { produce } from 'immer';

export default function user(state = [], action) {
  switch (action.type) {
    case '@user/ADD_DATA':
      return produce(state, draft => {
        draft.push({
          client: {
            name: action.name,
            email: action.email,
            genre: action.genre,
          },
        });
      });
    default:
      return state;
  }
}
