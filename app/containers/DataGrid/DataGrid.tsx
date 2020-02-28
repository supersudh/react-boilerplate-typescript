import React, { Component } from 'react';

interface DataGridProps {
  dataGrid: any;
  onUpdateCounter: () => {};
}

interface DataGridState { }

export default class DataGrid extends Component<DataGridProps, DataGridState> {
  public render() {
    const { dataGrid, onUpdateCounter } = this.props;
    return (
      <div>
        <p>Counter: {dataGrid.counter}</p>
        <button onClick={onUpdateCounter}>Click</button>
      </div>
    );
  }
}
