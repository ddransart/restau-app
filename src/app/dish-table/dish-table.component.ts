import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DishTableDataSource } from './dish-table-datasource';

@Component({
  selector: 'restau-dish-table',
  templateUrl: './dish-table.component.html',
  styleUrls: ['./dish-table.component.css']
})
export class DishTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DishTableDataSource;
 

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'price'];

  ngOnInit() {
    this.dataSource = new DishTableDataSource(this.paginator, this.sort);
  }
}
