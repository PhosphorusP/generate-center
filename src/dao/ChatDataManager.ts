import Dexie from 'dexie';
import { ChatRecord } from '../models/ChatRecord';
import { DataManager } from './DataManager';

class ChatDatabase extends Dexie {
  chatRecords: Dexie.Table<ChatRecord, number>;

  constructor() {
    super('ChatDatabase');
    this.version(1).stores({
      chatRecords: '++chatRecordId, chatConversationId'
    });
    this.chatRecords = this.table('chatRecords');
  }
}

export class ChatDataManager implements DataManager<ChatRecord> {
  private db: ChatDatabase;
  conversationId: number;

  constructor(conversationId: number) {
    this.db = new ChatDatabase();
    this.conversationId = conversationId;
  }

  async createRecord(recordData: ChatRecord): Promise<boolean> {
    try {
      recordData.chatConversationId = Number(this.conversationId);
      await this.db.chatRecords.add(recordData);
      return true;
    } catch (error) {
      console.error('Error creating record:', error);
      return false;
    }
  }

  async findRecordById(id: string): Promise<ChatRecord | null> {
    try {
      const record = await this.db.chatRecords
        .where({
          chatRecordId: Number(id),
          chatConversationId: Number(this.conversationId)
        })
        .first();
      return record || null;
    } catch (error) {
      console.error('Error finding record by ID:', error);
      return null;
    }
  }

  async updateRecord(
    id: string,
    assignments: Partial<ChatRecord>
  ): Promise<boolean> {
    try {
      await this.db.chatRecords
        .where({
          chatRecordId: Number(id),
          chatConversationId: Number(this.conversationId)
        })
        .modify(assignments);
      return true;
    } catch (error) {
      console.error('Error updating record:', error);
      return false;
    }
  }

  async deleteRecord(id: string): Promise<boolean> {
    try {
      await this.db.chatRecords
        .where({
          chatRecordId: Number(id),
          chatConversationId: Number(this.conversationId)
        })
        .delete();
      return true;
    } catch (error) {
      console.error('Error deleting record:', error);
      return false;
    }
  }
}
