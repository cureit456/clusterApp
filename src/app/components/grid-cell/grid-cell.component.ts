import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClusterService } from '../../services/cluster.service';
import { DialogNavigationEnum } from '../../enums/DialogNavigationEnum';

@Component({
  selector: 'app-grid-cell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid-cell.component.html',
  styleUrl: './grid-cell.component.scss'
})
export class GridCellComponent {
  @Input('imagePath') imagePath: string = '';
  @Input('coinId') id!:number;

  constructor(private clusterService : ClusterService){

  }
  
  handleOnCoinClick(){
    this.clusterService.changeDialogView.set(DialogNavigationEnum.MONEY_PREVIEW_DIALOG_VIEW);
    this.clusterService.selectedMoneyId.set(this.id);
    this.clusterService.showDialog();
  }

}
