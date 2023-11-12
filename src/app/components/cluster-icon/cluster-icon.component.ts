import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CdkContextMenuTrigger, CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import { ClusterService } from '../../services/cluster.service';
import { NavigationEnum } from '../../enums/NavigationEnum';

@Component({
  selector: 'app-cluster-icon',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    CdkContextMenuTrigger,
    CdkMenu,
    CdkMenuItem,
  ],
  templateUrl: './cluster-icon.component.html',
  styleUrl: './cluster-icon.component.scss',
})
export class ClusterIconComponent {
  @ViewChild('contextMenu') contextMenu!: ViewContainerRef;

  @Input('clusterTitle')
  clusterTitle: string = '';
  @Input('clusterId') id!:string;


  constructor(private clusterService:ClusterService){

  }

  handleOnButtonClick():void {
    this.clusterService.selectedClusterId.set(this.id);
    this.clusterService.isGridToolbar.set(true);
    this.clusterService.changeView.set(NavigationEnum.CLUSTER_GRID_PAGES_VIEW);

     
    
  }
}
