import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { Note } from "../../models/note/note";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.css"]
})
export class NotesComponent implements OnInit {
  columns: Array<any>;
  displayedColumns: string[];

  positions: any[] = [];
  //@Input() notes: Note[];

  // displayedColumns = ['position', 'title', 'date'];
  dataSource: MatTableDataSource<Note>;

  constructor() {}

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.positions = [
      {
        id: 1,
        position: "1- Pay back dinner",
        name: "Pay back dinner",
        weight: "20",
        symbol: "PBD"
      },
      {
        id: 2,
        position: "2- Pay back dinner",
        name: "Pay back dinner",
        weight: "20",
        symbol: "PBD"
      },
      {
        id: 3,
        position: "3- Pay back dinner",
        name: "Pay back dinner",
        weight: "20",
        symbol: "PBD"
      },
      {
        id: 4,
        position: "4- Pay back dinner",
        name: "Pay back dinner",
        weight: "20",
        symbol: "PBD"
      },
      {
        id: 5,
        position: "5- Pay back dinner",
        name: "Pay back dinner",
        weight: "20",
        symbol: "PBD"
      },
      {
        id: 6,
        position: "6- Pay back dinner",
        name: "Pay back dinner",
        weight: "20",
        symbol: "PBD"
      },
      {
        id: 7,
        position: "7- Pay back dinner",
        name: "Pay back dinner",
        weight: "20",
        symbol: "PBD"
      },
      {
        id: 8,
        position: "8- Pay back dinner",
        name: "Pay back dinner",
        weight: "20",
        symbol: "PBD"
      },
      {
        id: 9,
        position: "9- Pay back dinner",
        name: "Pay back dinner",
        weight: "20",
        symbol: "PBD"
      },
      {
        id: 10,
        position: "10- Pay back dinner",
        name: "Pay back dinner",
        weight: "20",
        symbol: "PBD"
      },
      {
        id: 11,
        position: "11- Pay back dinner",
        name: "Pay back dinner",
        weight: "20",
        symbol: "PBD"
      }
    ];
    this.dataSource = new MatTableDataSource<Note>(this.positions);
    this.columns = [
      { value: "position", label: "No." },
      { value: "name", label: "Name" },
      { value: "weight", label: "Weight" },
      { value: "symbol", label: "Symbol" }
    ];

    this.displayedColumns = this.columns.map(column => column.value);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
