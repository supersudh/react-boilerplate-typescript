import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  counter: 0,
};

function dataGridReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.UPDATE_COUNTER:
      return { ...state, counter: action.payload };
    default:
      return state;
  }
}

export default dataGridReducer;
