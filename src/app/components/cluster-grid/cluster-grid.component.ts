import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClusterService } from '../../services/cluster.service';
import { GridCellComponent } from '../grid-cell/grid-cell.component';

@Component({
  selector: 'app-cluster-grid',
  standalone: true,
  imports: [CommonModule, GridCellComponent],
  templateUrl: './cluster-grid.component.html',
  styleUrl: './cluster-grid.component.scss'
})
export class ClusterGridComponent {

  constructor(public clusterService : ClusterService){

  }

}
