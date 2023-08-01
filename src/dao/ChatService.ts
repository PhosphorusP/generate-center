import { Account } from '../models/Account';
import { ChatConversation } from '../models/ChatConversation';
import { APIService } from '../services/APIService';
import { ChatDataManager } from './ChatDataManager';

class TmpRecord {
  chatRecordId: number;
  cached: string;
  currentDelta: string;
  constructor(chatRecordId: number) {
    this.chatRecordId = chatRecordId;
    this.cached = '';
    this.currentDelta = '';
  }

  onDelta(delta: string): void {
    this.cached = `${this.cached}${this.currentDelta}`;
    this.currentDelta = delta;
  }
}

export abstract class ChatService implements APIService {
  tmpRecords: TmpRecord[];
  chatDataManager: ChatDataManager;
  conversation: ChatConversation;
  abstract name: string;
  abstract id: string;
  proxy = '';
  account: Account;
  constructor(conversation: ChatConversation, account: Account) {
    this.tmpRecords = [];
    this.chatDataManager = new ChatDataManager(conversation.chatConversationId);
    this.conversation = conversation;
    this.account = account;
  }

  testService(): boolean {
    throw new Error('Method not implemented.');
  }

  onChat(content: string): void {
    // 实现你的逻辑
  }
}
