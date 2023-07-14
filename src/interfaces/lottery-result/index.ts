import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface LotteryResultInterface {
  id?: string;
  result: string;
  date: any;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface LotteryResultGetQueryInterface extends GetQueryInterface {
  id?: string;
  result?: string;
  organization_id?: string;
}
