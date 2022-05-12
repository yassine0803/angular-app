import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from 'src/app/components/dialog-box/dialog-box.component';

export interface UsersData {
  name: string;
  id: number;
  role: string;
}

const ELEMENT_DATA: UsersData[] = [
  {id: 0, name: 'user', role:'user'},
  {id: 1, name: 'user1', role:'developer'},
  {id: 2, name: 'user2',role:'admin'},
  {id: 3, name: 'user3',role:'test'}
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name','role', 'action'];
  dataSource = ELEMENT_DATA;
  

  ngOnInit(): void {
  }

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  constructor(public dialog: MatDialog) {}

  openDialog(action: any,obj: { action: any; }) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }
  updateRowData(row_obj: { id: number; name: string;role: string }){
    this.dataSource = this.dataSource.filter((value)=>{
      if(value.id == row_obj.id){
        value.name = row_obj.name;
        value.role = row_obj.role;
      }
      return true;
    });
  }
  deleteRowData(row_obj: { id: number; }){
    this.dataSource = this.dataSource.filter((value)=>{
      return value.id != row_obj.id;
    });
  }

}
