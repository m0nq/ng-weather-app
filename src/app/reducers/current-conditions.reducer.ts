import { CurrentConditionsActions, CurrentConditionsActionTypes } from '../actions/current-conditions.actions';

export interface CurrentConditionsState {
  currentConditions: Map<String, any>;
}

export const initialState: CurrentConditionsState = {
  currentConditions: new Map()
};

export function currentConditionsReducer(state = initialState, action: CurrentConditionsActions): CurrentConditionsState {
  switch (action.type) {
    case CurrentConditionsActionTypes.CurrentConditionsLoaded:
      const cc = new Map(state.currentConditions);
      cc.set(action.zipCode, action.conditions);
      return { ...state, currentConditions: cc };
    default:
      return state;
  }
}
