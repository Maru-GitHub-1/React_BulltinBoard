import firebase from 'firebase'
import { getMessagesInCollection } from '../db';

class Message {
  constructor({ id, body, date}) {
    this.id = id;
    this.body = body;
    this.date = date;
  }

  static async save({ body, channelId }) {
    if( !body || !body.trim() ) {
      throw new Error('bodyはString型で1文字以上の入力が必要です');
    }

    // firebase.firestore.FieldValue.serverTimestamp()
      // クライアントの時間に依存せず、サーバーの時間を 使用するため
    const postData = {
      body,
      date: firebase.firestore.FieldValue.serverTimestamp()
    };

    const docRef = await getMessagesInCollection(channelId).add(postData);
    const snapShot = await docRef.get();
    const data = snapShot.data();
    const model = this.create(docRef.id, data);

    return model;
  }

  static create(id, data) {
    return new Message({
      id,
      body: data.body,
      date: data.date.toDate().toLocaleString()
    })
  }

  static async fetchMessages(channelId) {
    const collection = await getMessagesInCollection(channelId).orderBy('date').get();
    // emptyプロパティ -> コレクションが空
    if( collection.empty ) {
      return [];
    }

    // docs -> documents
    return collection.docs.map(doc => {
      return this.create(doc.id, doc.data());
    });
  }
}

export default Message