// チャットメッセージ
import { ChatRole } from "../../common/ChatRole";

export class ChatMessage {
    //DB側で採番するID
    id: number | null;
    //OpenAI側からの戻り値のID
    AzureOpenAIID: string;
    content: string;
    role: ChatRole;
    order: number;
  
    constructor(
      AzureOpenAIID: string,
      role: ChatRole,
      content: string,
      order?: number
    ) {
      this.id = null;
      this.AzureOpenAIID = AzureOpenAIID;
      this.role = role;
      this.content = content;
      if (order) {
        this.order = order;
      } else {
        this.order = 0;
      }
    }
}