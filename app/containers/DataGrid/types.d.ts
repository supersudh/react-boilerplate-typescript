import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

/* --- STATE --- */
interface DataGridState {
  readonly default: any;
}

/* --- ACTIONS --- */
type DataGridActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type RootState = ApplicationRootState;
type ContainerState = DataGridState;
type ContainerActions = DataGridActions;

export { RootState, ContainerState, ContainerActions };
