import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ClusterService } from '../../services/cluster.service';
import { DialogNavigationEnum } from '../../enums/DialogNavigationEnum';
import { NavigationEnum } from '../../enums/NavigationEnum';

@Component({
  selector: 'app-left-toolbar',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './left-toolbar.component.html',
  styleUrl: './left-toolbar.component.scss',
})
export class LeftToolbarComponent {

  constructor(public clusterService :ClusterService){

  }

  onAddClick(){
    this.clusterService.changeDialogView.set(DialogNavigationEnum.ADD_CLUSTER_DIALOG_VIEW);
    this.clusterService.showDialog();
  }

  handleOnBackToMenuClick(): void {
    this.clusterService.isGridToolbar.set(false);
    this.clusterService.changeView.set(NavigationEnum.CLUSTER_MENU_VIEW);
  }

  handleOnAddMoney():void {
    this.clusterService.changeDialogView.set(DialogNavigationEnum.ADD_MONEY_DIALOG_VIEW);
    this.clusterService.showDialog();


  }
}
