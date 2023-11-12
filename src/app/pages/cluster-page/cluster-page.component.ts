import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftToolbarComponent } from '../../components/left-toolbar/left-toolbar.component';
import { MainMenuComponent } from '../../components/main-menu/main-menu.component';

@Component({
  selector: 'app-cluster-page',
  standalone: true,
  imports: [CommonModule, LeftToolbarComponent, MainMenuComponent],
  templateUrl: './cluster-page.component.html',
  styleUrl: './cluster-page.component.scss'
})
export class ClusterPageComponent {

}
