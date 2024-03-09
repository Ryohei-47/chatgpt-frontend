import { Message } from "./Message";
//チャットAPIにリクエストするJSONパラメータ
export type ChatRequest = {
  //messages（roleとcontentを含む）
  messages: Message[];

  //temperature：回答の独創性を決める
  temperature?: number;

  topP?: number;

  n?: number;

  stop?: string | string[];

  maxTokens?: number;

  presencePenalty?: number;

  frequencyPenalty?: number;

  logitBias?: object;

  user?: string;

  userPromptNumber?: string;
};