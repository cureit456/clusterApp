import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClusterService } from '../../../services/cluster.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { ClusterModel } from '../../../models/ClusterModel';

@Component({
  selector: 'app-add-cluster-dialog',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule,MatFormFieldModule, MatInputModule,MatButtonModule, MatIconModule],
  templateUrl: './add-cluster-dialog.component.html',
  styleUrl: './add-cluster-dialog.component.scss'
})
export class AddClusterDialogComponent {
  constructor(private clusterService: ClusterService){}

  handleCloseClick(){
    this.clusterService.closeDialog();
  }
  handleCreateClick(form: NgForm){
   
    if(form.valid){
      const name = form.value.clusterName;
      const id = (Math.floor(Math.random() * (1000 - 3) + 3)).toString();

      const newCluster :ClusterModel = {clusterId: id,clusterName:name, clusterType: 'test', coolumns:1,rows:1, money : [
        {id: 1, texturePathFrontRevers: '../../assets/money/1_zł_front.png', texturePathBackRevers:'../../assets/money/1zl_back.jpg'},
        {id: 2, texturePathFrontRevers: '../../assets/money/5_zł_front.png', texturePathBackRevers:'../../assets/money/5_zł_back.jpg'},
        {id: 3, texturePathFrontRevers: '../../assets/money/5_zł_front.png', texturePathBackRevers:'../../assets/money/5_zł_back.jpg'},
        {id: 4, texturePathFrontRevers: '../../assets/money/1_zł_front.png', texturePathBackRevers:'../../assets/money/1zl_back.jpg'},
        {id: 5, texturePathFrontRevers: '../../assets/money/5_zł_front.png', texturePathBackRevers:'../../assets/money/5_zł_back.jpg'},
        {id: 6, texturePathFrontRevers: '../../assets/money/1_zł_front.png', texturePathBackRevers:'../../assets/money/1zl_back.jpg'},

      ]};

      this.clusterService.cluster().push(newCluster);
      
      
      this.clusterService.closeDialog();
    } 

  }
}
