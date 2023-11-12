import { MoneyModel } from "./MoneyModel";

export type ClusterModel = {
  [id:string]: {
    clusterId:string;
    clusterName: string;
    clusterType: string;
    rows: number;
    coolumns: number;
    money:MoneyModel[];
  }
}