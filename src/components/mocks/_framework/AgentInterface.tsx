"use client";

import { useState, useRef, useEffect, type FormEvent, type KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import { type AgentMessage } from "@/types/agent";

export interface AgentInterfaceProps {
  /** Array of chat messages to display */
  messages: AgentMessage[];
  /** Callback when user sends a query */
  onSendQuery: (query: string) => void;
  /** Whether the agent is currently processing */
  isLoading?: boolean;
  /** Input placeholder text */
  placeholder?: string;
  /** Optional suggested queries to display */
  suggestedQueries?: string[];
  /** Optional header title */
  title?: string;
  /** Optional header subtitle */
  subtitle?: string;
}

/**
 * AgentInterface - Chat UI for agent queries
 *
 * Displays conversation history between user and agent,
 * with input field for sending new queries.
 */
export function AgentInterface({
  messages,
  onSendQuery,
  isLoading = false,
  placeholder = "Ask agent...",
  suggestedQueries = [],
  title = "Agent Interface",
  subtitle = "Ask questions or give commands"
}: AgentInterfaceProps) {
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSendQuery(input.trim());
      setInput("");
    }
  };

  const handleSuggestedQuery = (query: string) => {
    onSendQuery(query);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
        <h3 className="font-display text-xl text-slate-900 dark:text-slate-100">
          {title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          {subtitle}
        </p>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {messages.length === 0 && !isLoading ? (
          <div className="flex items-center justify-center h-full text-center py-12">
            <div>
              <p className="text-slate-400 dark:text-slate-500 mb-4">
                Start a conversation with the agent
              </p>
              {suggestedQueries.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    Try asking:
                  </p>
                  <div className="flex flex-col gap-2">
                    {suggestedQueries.map((query, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSuggestedQuery(query)}
                        className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:border-teal-500 dark:hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors text-left"
                      >
                        {query}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <AnimatePresence mode="popLayout">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {/* User Message */}
                {msg.query && (
                  <div className="flex justify-end mb-2">
                    <div className="max-w-[80%] bg-teal-100 dark:bg-teal-900/30 text-teal-900 dark:text-teal-100 rounded-2xl rounded-tr-sm px-4 py-3">
                      <p className="text-sm font-medium whitespace-pre-wrap">
                        {msg.query}
                      </p>
                    </div>
                  </div>
                )}

                {/* Agent Message */}
                {msg.response && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-2xl rounded-tl-sm px-4 py-3">
                      <p className="text-sm whitespace-pre-wrap">
                        {msg.response}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Thinking Indicator */}
            {isLoading && (
              <motion.div
                key="thinking"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex justify-start"
              >
                <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl rounded-tl-sm px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <motion.div
                        className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-orange-500"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          delay: 0
                        }}
                      />
                      <motion.div
                        className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-orange-500"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          delay: 0.2
                        }}
                      />
                      <motion.div
                        className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-orange-500"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          delay: 0.4
                        }}
                      />
                    </div>
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Thinking...
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}

        {/* Auto-scroll anchor */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form
        onSubmit={handleSubmit}
        className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50"
      >
        <div className="flex gap-2">
          <Input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            disabled={isLoading}
            className="flex-1 bg-white dark:bg-slate-900"
          />
          <Button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="bg-gradient-to-r from-teal-600 to-orange-500 hover:from-teal-700 hover:to-orange-600 text-white"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </form>
    </div>
  );
}
