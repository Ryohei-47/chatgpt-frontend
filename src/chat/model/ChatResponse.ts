import { Message } from "./Message";
//レスポンスのJSONパラメータ
export type ChatResponse = {
  id: string;
  object: string;
  created: string;
  model: string;
  choices: Array<{
    index: number;
    finish_reason?: string;
    message?: Message;
  }>;
};