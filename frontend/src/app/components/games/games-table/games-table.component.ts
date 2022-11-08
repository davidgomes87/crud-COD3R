import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { GamesTableDataSource} from './games-table-datasource';
import { Game } from '../game.model';
import { GamesService } from '../games.service';


@Component({
  selector: 'app-games-table',
  templateUrl: './games-table.component.html',
  styleUrls: ['./games-table.component.css']
})
export class GamesTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Game>;
  dataSource: GamesTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  games:Game[] = []
  displayedColumns = ['id', 'name', "type", "year", "actions"];

 

  constructor( private gamesService:GamesService) {
    this.dataSource = new GamesTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  ngOnInit(): void {
  this.gamesService.buscarApi().subscribe((games) => {this.games = games})}
  
}
