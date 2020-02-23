import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the dataGrid state domain
 */

const selectDataGridDomain = (state: ApplicationRootState) => {
  return state || initialState;
};

/**
 * Other specific selectors
 */

/**
 * Default selector used by DataGrid
 */

const makeSelectDataGrid = () =>
  createSelector(
    selectDataGridDomain,
    substate => {
      return substate;
    },
  );

export default makeSelectDataGrid;
export { selectDataGridDomain };
