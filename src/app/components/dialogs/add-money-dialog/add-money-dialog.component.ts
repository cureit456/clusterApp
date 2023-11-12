import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClusterService } from '../../../services/cluster.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-add-money-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule,CommonModule, MatFormFieldModule],
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
    const file :FileList = (event.target as HTMLInputElement).files as FileList;
    const image = file.item(0) as File;
    console.log(image);
    

  }
}
