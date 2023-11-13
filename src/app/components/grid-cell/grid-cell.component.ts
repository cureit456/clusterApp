import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClusterService } from '../../services/cluster.service';
import { DialogNavigationEnum } from '../../enums/DialogNavigationEnum';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CdkContextMenuTrigger, CdkMenu, CdkMenuItem } from '@angular/cdk/menu';

@Component({
  selector: 'app-grid-cell',
  standalone: true,
  imports: [CommonModule, MatButtonModule,
    MatIconModule,
    MatMenuModule,
    CdkContextMenuTrigger,
    CdkMenu,
    CdkMenuItem,],
  templateUrl: './grid-cell.component.html',
  styleUrl: './grid-cell.component.scss'
})
export class GridCellComponent {
  @Input('imagePath') imagePath: string = '';
  @Input('coinId') id!:number;
  @Input('index') index!:number;


  constructor(private clusterService : ClusterService){

  }
  
  handleOnCoinClick(){
    this.clusterService.changeDialogView.set(DialogNavigationEnum.MONEY_PREVIEW_DIALOG_VIEW);
    this.clusterService.selectedMoneyId.set(this.id);
    this.clusterService.showDialog();
  }

  onCoinDelete(){
    this.clusterService.currentGridCollection().splice(this.index,1);
    
}

}
