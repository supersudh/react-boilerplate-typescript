import React from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import * as dataGridActions from './actions';
import reducer from './reducer';
import saga from './saga';
import makeSelectDataGrid from './selectors';

import DataGrid from './DataGrid';

const key = 'dataGrid';

const stateSelector = createStructuredSelector({
  dataGrid: makeSelectDataGrid(),
});


export default function() {
  useInjectReducer({ key, reducer: reducer });
  useInjectSaga({ key, saga: saga });

  const dispatch = useDispatch();
  const allDispatches = bindActionCreators(dataGridActions, dispatch);

  const { dataGrid } = useSelector(stateSelector);
  return (
    <DataGrid
      dataGrid={dataGrid}
      {...allDispatches}
    />
  );
}
