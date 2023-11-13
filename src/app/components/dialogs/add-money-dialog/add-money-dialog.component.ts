import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClusterService } from '../../../services/cluster.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, NgForm } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {  MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-money-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule,CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './add-money-dialog.component.html',
  styleUrl: './add-money-dialog.component.scss'
})
export class AddMoneyDialogComponent {

  constructor(private clusterService: ClusterService){

  }
  handleCloseClick(){
    this.clusterService.closeDialog();
  }
  onChoseFile(event: Event){

  }
  handleCreateClick(form: NgForm){
    let id = this.clusterService.currentGridCollection().at(this.clusterService.currentGridCollection().length - 1)?.id;
    if(id){
      id++;
    }else {
      id = 1;
    }
    const testCoin =  {id: id, texturePathFrontRevers: '../../assets/money/5_zł_front.png', texturePathBackRevers:'../../assets/money/5_zł_back.jpg'};
    this.clusterService.currentGridCollection().push(testCoin);
  }
}
