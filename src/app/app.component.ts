import { AfterViewInit, Component, ElementRef, ViewChild, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IconProviderService } from './services/icon-provider.service';
import {ClusterService } from './services/cluster.service';
import { ClusterPageComponent } from './pages/cluster-page/cluster-page.component';
import { ClusterGridPageComponent } from './pages/cluster-grid-page/cluster-grid-page.component';
import { MoneyPreviewComponent } from './components/dialogs/money-preview/money-preview.component';
import { AddMoneyDialogComponent } from './components/dialogs/add-money-dialog/add-money-dialog.component';
import { AddClusterDialogComponent } from './components/dialogs/add-cluster-dialog/add-cluster-dialog.component';
import { LeftToolbarComponent } from './components/left-toolbar/left-toolbar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ClusterPageComponent,
    ClusterGridPageComponent,
    HttpClientModule,
    MoneyPreviewComponent,
    AddMoneyDialogComponent,
    AddClusterDialogComponent,
    LeftToolbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[ClusterService]
})
export class AppComponent implements AfterViewInit {
  public readonly CLUSTER_MENU_VIEW = 'CLUSTER_MENU_VIEW';
  public readonly CLUSTER_GRID_PAGES_VIEW = 'CLUSTER_GRID_PAGES_VIEW';
  public readonly MONEY_PREVIEW_DIALOG_VIEW = 'MONEY_PREVIEW_DIALOG_VIEW';
  public readonly ADD_CLUSTER_DIALOG_VIEW = 'ADD_CLUSTER_DIALOG_VIEW';
  public readonly ADD_MONEY_DIALOG_VIEW = 'ADD_MONEY_DIALOG_VIEW';
  
  @ViewChild('dialogElement') dialogElement!: ElementRef<HTMLDialogElement>;
  title = 'clusterApp';


  constructor(private iconProvider: IconProviderService, public clusterService: ClusterService, private elRef:ElementRef<HTMLElement>) {
    elRef.nativeElement.addEventListener('contextmenu',(event:Event)=>{
      event.preventDefault();
    });
  }


  ngAfterViewInit(){
    this.clusterService.dialogElement = this.dialogElement;
  }
}
