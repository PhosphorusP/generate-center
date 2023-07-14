import Dexie, { Table } from 'dexie';
import {
  StoredPreference,
  StoredChatConversation,
  StoredChatRecord
} from '../types';

export class DBClass extends Dexie {
  preferences!: Table<StoredPreference>;
  chatConversations!: Table<StoredChatConversation>;
  chatRecords!: Table<StoredChatRecord>;
  constructor() {
    super('GenerateCenterDatabase');
    this.version(1).stores({
      preferences: 'preferenceId, value',
      chatConversations: 'chatConversationId, title, created, updated',
      chatRecords:
        'chatRecordId, chatConversationId, role, content, created, updated, finishReason, model, expectedMaxToken, oneOfChoices'
    });
  }
}

export const db = new DBClass();
