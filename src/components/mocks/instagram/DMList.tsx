"use client";

import { useState } from "react";
import { MessageCircle, Clock } from "lucide-react";

import { useMockUI } from "@/components/mocks/_framework/MockUIContext";
import { InteractiveElement } from "@/components/mocks/_framework/InteractiveElement";
import { type Conversation, type InstagramData, type Category } from "./types";

const CATEGORY_COLORS: Record<Category, string> = {
  Support: "bg-blue-100 text-blue-700",
  Sales: "bg-green-100 text-green-700",
  Spam: "bg-red-100 text-red-700",
  General: "bg-slate-100 text-slate-700",
};

function formatTimestamp(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const minutes = Math.floor(diff / 1000 / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes}m`;
  if (hours < 24) return `${hours}h`;
  if (days < 7) return `${days}d`;
  return date.toLocaleDateString();
}

export function DMList() {
  const { state } = useMockUI<InstagramData>();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const conversations = state.data.conversations;
  const selectedConversation = conversations.find((c) => c.id === selectedId);

  const highlights = state.selectedElements;

  return (
    <div className="flex h-full bg-white -m-6">
      {/* Left sidebar - Conversation list */}
      <div className="w-96 border-r border-slate-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-slate-200">
          <h2 className="font-display text-lg font-semibold text-slate-900">
            Messages
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            {conversations.length} conversations
          </p>
        </div>

        {/* Conversation list */}
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conversation) => {
            const isHighlighted = highlights.includes(conversation.id);
            const isSelected = selectedId === conversation.id;

            return (
              <InteractiveElement
                key={conversation.id}
                id={conversation.id}
                highlight={isHighlighted}
                onClick={() => setSelectedId(conversation.id)}
              >
                <div
                  className={`
                    p-4 border-b border-slate-100 cursor-pointer
                    transition-colors
                    ${isSelected 
                      ? "bg-orange-50" 
                      : "hover:bg-slate-50"
                    }
                  `}
                >
                  <div className="flex items-start gap-3">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-500 flex items-center justify-center text-white font-semibold flex-shrink-0">
                      {conversation.avatar}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-2">
                        <p className="font-semibold text-slate-900 truncate">
                          {conversation.username}
                        </p>
                        <span className="text-xs text-slate-500 flex-shrink-0">
                          {formatTimestamp(conversation.timestamp)}
                        </span>
                      </div>

                      <p className="text-sm text-slate-600 truncate mt-0.5">
                        {conversation.preview}
                      </p>

                      <div className="flex items-center gap-2 mt-2">
                        <span
                          className={`
                            text-xs px-2 py-0.5 rounded-full font-medium
                            ${CATEGORY_COLORS[conversation.category]}
                          `}
                        >
                          {conversation.category}
                        </span>
                        {conversation.unread > 0 && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500 text-white font-medium">
                            {conversation.unread} new
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </InteractiveElement>
            );
          })}
        </div>
      </div>

      {/* Right panel - Selected conversation thread */}
      <div className="flex-1 flex flex-col">
        {selectedConversation ? (
          <>
            {/* Thread header */}
            <div className="p-4 border-b border-slate-200 bg-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-500 flex items-center justify-center text-white font-semibold">
                  {selectedConversation.avatar}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    {selectedConversation.username}
                  </p>
                  <span
                    className={`
                      text-xs px-2 py-0.5 rounded-full font-medium
                      ${CATEGORY_COLORS[selectedConversation.category]}
                    `}
                  >
                    {selectedConversation.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-slate-50">
              <div className="max-w-3xl mx-auto space-y-4">
                {selectedConversation.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isFromUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`
                        max-w-md px-4 py-2 rounded-2xl
                        ${
                          message.isFromUser
                            ? "bg-gradient-to-br from-orange-500 to-orange-600 text-white"
                            : "bg-white text-slate-900 border border-slate-200"
                        }
                      `}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p
                        className={`
                          text-xs mt-1
                          ${
                            message.isFromUser
                              ? "text-orange-100"
                              : "text-slate-500"
                          }
                        `}
                      >
                        {formatTimestamp(message.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Message input */}
            <div className="p-4 border-t border-slate-200 bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Message..."
                  className="flex-1 px-4 py-2 rounded-full border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="px-6 py-2 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full font-medium hover:from-orange-600 hover:to-orange-700 transition-colors">
                  Send
                </button>
              </div>
            </div>
          </>
        ) : (
          /* Empty state */
          <div className="flex-1 flex items-center justify-center bg-slate-50">
            <div className="text-center">
              <MessageCircle className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500 font-medium">
                Select a conversation to view messages
              </p>
              <p className="text-sm text-slate-400 mt-1">
                Choose from {conversations.length} conversations
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
