import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ClusterService } from '../../services/cluster.service';
import { NavigationEnum } from '../../enums/NavigationEnum';
import { ClusterGridComponent } from '../../components/cluster-grid/cluster-grid.component';
import { DialogNavigationEnum } from '../../enums/DialogNavigationEnum';

@Component({
  selector: 'app-cluster-grid-page',
  standalone: true,
  imports: [CommonModule,  MatButtonModule,
    MatIconModule, ClusterGridComponent],
  templateUrl: './cluster-grid-page.component.html',
  styleUrl: './cluster-grid-page.component.scss'
})
export class ClusterGridPageComponent {

  constructor(private clusterService : ClusterService ){}


}
