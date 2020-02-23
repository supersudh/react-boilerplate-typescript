/*
 *
 * DataGrid
 *
 */

import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDataGrid from './selectors';
import reducer from './reducer';
import saga from './saga';

const stateSelector = createStructuredSelector({
  dataGrid: makeSelectDataGrid(),
});

interface Props { }

function DataGrid(props: Props) {
  // Warning: Add your key to RootState in types/index.d.ts file
  useInjectReducer({ key: 'dataGrid', reducer: reducer });
  useInjectSaga({ key: 'dataGrid', saga: saga });

  const { dataGrid } = useSelector(stateSelector);
  const dispatch = useDispatch();
  return <div>DataGrid</div>;
}

export default memo(DataGrid);
