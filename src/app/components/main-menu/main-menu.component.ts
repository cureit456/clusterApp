import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClusterIconComponent } from '../cluster-icon/cluster-icon.component';
import { MoneyPreviewComponent } from '../dialogs/money-preview/money-preview.component';
import { ClusterService } from '../../services/cluster.service';
@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [CommonModule, ClusterIconComponent, MoneyPreviewComponent],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss',
})
export class MainMenuComponent {

  constructor(public clusterService : ClusterService){}
}
