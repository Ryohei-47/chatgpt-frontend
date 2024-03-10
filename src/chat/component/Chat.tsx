import React from 'react';
import ReactMarkdown from 'react-markdown';

interface Message {
  text: string;
  isMe: boolean;
}

interface ChatProps {
  messages: Message[];
}

const Chat: React.FC<ChatProps> = ({ messages }) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start space-x-2 ${message.isMe ? 'self-end' : ''}`}
          >
            {!message.isMe && (
              <img
                src="user_avatar.jpg"
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
            )}
            <div
              className={`bg-white p-3 rounded-lg ${
                message.isMe ? 'bg-blue-500 text-white self-end' : ''
              }`}
            >
              <ReactMarkdown>{message.text}</ReactMarkdown>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center p-4">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-3 py-2 border rounded-full outline-none"
        />
        <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-full">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
