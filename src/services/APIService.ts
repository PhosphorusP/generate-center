import { Account } from '../models/Account';

export abstract class APIService {
  abstract name: string;
  abstract id: string;
  abstract account: Account;
  abstract proxy: string;
  abstract testService(): boolean;
}
