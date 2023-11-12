import { computed, ElementRef, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { ClusterModel } from '../models/ClusterModel';
import { NavigationEnum } from '../enums/NavigationEnum';
import { MoneyModel } from '../models/MoneyModel';
import { DialogNavigationEnum } from '../enums/DialogNavigationEnum';


const CLUSTER_MOCUP : ClusterModel = {
   clusterId: '1', clusterName:'test1', clusterType : 'coin', coolumns: 1, rows: 1, money : [
    {id: 1, texturePathFrontRevers: '../../assets/money/1_zł_front.png', texturePathBackRevers:'../../assets/money/1zl_back.jpg'},
    {id: 2, texturePathFrontRevers: '../../assets/money/5_zł_front.png', texturePathBackRevers:'../../assets/money/5_zł_back.jpg'}
  ]}


@Injectable({
  providedIn: 'root'
})
export class ClusterService {
  
 public selectedClusterId :WritableSignal<string> = signal<string>('');
 public isGridToolbar :WritableSignal<boolean> = signal<boolean>(false);
 public selectedMoneyId: WritableSignal<number> = signal<number>(0);
 public changeView :WritableSignal<NavigationEnum> = signal<NavigationEnum>(NavigationEnum.CLUSTER_MENU_VIEW);
 public changeDialogView :WritableSignal<DialogNavigationEnum> = signal<DialogNavigationEnum>(DialogNavigationEnum.MONEY_PREVIEW_DIALOG_VIEW);
 public cluster :WritableSignal<ClusterModel[]> = signal<ClusterModel[]>([CLUSTER_MOCUP]);
 public currentGridCollection: Signal<MoneyModel[]> = computed(() => this.cluster().filter(model => model.clusterId === this.selectedClusterId())[0]?.money);
 public moneyContext: Signal<MoneyModel> = computed(() => this.currentGridCollection().filter(context => context.id === this.selectedMoneyId())[0]);
 public dialogElement!: ElementRef<HTMLDialogElement>;

  constructor() {
   }

   public closeDialog(){
    this.dialogElement.nativeElement.close();
   }
   public showDialog(){
    this.dialogElement.nativeElement.showModal()
   }
}
