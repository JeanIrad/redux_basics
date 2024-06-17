import * as actions from "./actionTypes";
let lastId = 0;
export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case actions.BUG_REMOVED:
      return state.filter((bg) => bg.id !== action.payload.id);
    case actions.BUG_RESOLVED:
      return;
      state.map((bg) =>
        bg.id === action.payload.id
          ? {
              ...bg,
              resolved: true,
            }
          : bg
      );

    default:
      return state;
  }
}
