import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClusterService } from '../../../services/cluster.service';

@Component({
  selector: 'app-add-cluster-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-cluster-dialog.component.html',
  styleUrl: './add-cluster-dialog.component.scss'
})
export class AddClusterDialogComponent {

  constructor(private clusterService: ClusterService){}
  
  handleCloseClick(){
    this.clusterService.closeDialog();
  }
}
