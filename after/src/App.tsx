import React from 'react';
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Inject,
  SelectionSettingsModel,
  Grid
} from '@syncfusion/ej2-react-grids';
import data from './dataSource.json';
import './App.css';

const App: React.FC = () => {

  const selectionOptions: SelectionSettingsModel = {
    checkboxMode: 'ResetOnRowClick',
    enableToggle: true
  };
  let grid: Grid | null;
  const rowSelected = () => {
    if (grid) {
      const selectedrowindex: number[] = grid.getSelectedRowIndexes();
    }
  }
  return (
    <div style={{ margin: '10%', marginTop: '5%' }}>
      <GridComponent dataSource={data}
        allowPaging={true}
        selectionSettings={selectionOptions}
        selectedRowIndex={1}
        rowSelected={rowSelected}
        ref={g => grid = g}
      >
        <ColumnsDirective>
          <ColumnDirective type='checkbox' width='50' />
          <ColumnDirective field='OrderID' headerText='Invoice ID' textAlign='Right' width='100' isPrimaryKey={true} />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCountry' headerText='Ship Country' />
          <ColumnDirective field='ShipName' headerText='Ship Name' />
          <ColumnDirective field='Freight' textAlign='Right' format='C2' width='100' />
        </ColumnsDirective>
        <Inject services={[Page]} />
      </GridComponent>
    </div>
  );
}

export default App;