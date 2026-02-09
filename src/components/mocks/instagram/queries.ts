import { type QueryResult } from "@/types/agent";
import { type MockUIState } from "@/types/mock-ui";
import { type InstagramData, type Category } from "./types";

export async function handleInstagramQuery(
  query: string,
  state: MockUIState<InstagramData>
): Promise<QueryResult> {
  const q = query.toLowerCase();
  const data = state.data;

  // Show support requests
  if (q.includes("support") && (q.includes("show") || q.includes("filter"))) {
    const supportConversations = data.conversations.filter(
      (c) => c.category === "Support"
    );
    return {
      response: `Found ${supportConversations.length} support requests. Filtering to show only Support category.`,
      dataUpdate: {
        conversations: supportConversations,
      },
      highlight: supportConversations.map((c) => c.id),
    };
  }

  // Show sales inquiries
  if (q.includes("sales") && (q.includes("show") || q.includes("filter") || q.includes("inquir"))) {
    const salesConversations = data.conversations.filter(
      (c) => c.category === "Sales"
    );
    return {
      response: `Found ${salesConversations.length} sales inquiries. Filtering to show only Sales category.`,
      dataUpdate: {
        conversations: salesConversations,
      },
      highlight: salesConversations.map((c) => c.id),
    };
  }

  // Show spam messages
  if (q.includes("spam") && (q.includes("show") || q.includes("filter"))) {
    const spamConversations = data.conversations.filter(
      (c) => c.category === "Spam"
    );
    return {
      response: `Found ${spamConversations.length} spam messages. Filtering to show only Spam category.`,
      dataUpdate: {
        conversations: spamConversations,
      },
      highlight: spamConversations.map((c) => c.id),
    };
  }

  // Show general messages
  if (q.includes("general") && (q.includes("show") || q.includes("filter"))) {
    const generalConversations = data.conversations.filter(
      (c) => c.category === "General"
    );
    return {
      response: `Found ${generalConversations.length} general messages. Filtering to show only General category.`,
      dataUpdate: {
        conversations: generalConversations,
      },
      highlight: generalConversations.map((c) => c.id),
    };
  }

  // Count unread messages
  if (q.includes("unread") && (q.includes("how many") || q.includes("count"))) {
    const unreadConversations = data.conversations.filter((c) => c.unread > 0);
    const totalUnread = unreadConversations.reduce(
      (sum, c) => sum + c.unread,
      0
    );
    return {
      response: `You have ${totalUnread} unread messages across ${unreadConversations.length} conversations.`,
      highlight: unreadConversations.map((c) => c.id),
    };
  }

  // Show unread messages
  if (q.includes("unread") && (q.includes("show") || q.includes("filter"))) {
    const unreadConversations = data.conversations.filter((c) => c.unread > 0);
    return {
      response: `Showing ${unreadConversations.length} conversations with unread messages.`,
      dataUpdate: {
        conversations: unreadConversations,
      },
      highlight: unreadConversations.map((c) => c.id),
    };
  }

  // Mark as spam
  if (q.includes("mark") && q.includes("spam")) {
    // Try to find a specific conversation to mark
    const username = extractUsername(q);
    if (username) {
      const conversation = data.conversations.find((c) =>
        c.username.toLowerCase().includes(username)
      );
      if (conversation) {
        const updatedConversations = data.conversations.map((c) =>
          c.id === conversation.id ? { ...c, category: "Spam" as Category } : c
        );
        return {
          response: `Marked conversation with ${conversation.username} as spam.`,
          dataUpdate: {
            conversations: updatedConversations,
          },
          highlight: [conversation.id],
        };
      }
    }
    return {
      response: "Please specify which conversation to mark as spam (e.g., 'mark crypto_winner as spam').",
    };
  }

  // Reply to specific user
  if (q.includes("reply") && q.includes("to")) {
    const username = extractUsername(q);
    if (username) {
      const conversation = data.conversations.find((c) =>
        c.username.toLowerCase().includes(username)
      );
      if (conversation) {
        return {
          response: `Opening conversation with ${conversation.username}. You can compose your reply in the message thread.`,
          highlight: [conversation.id],
        };
      }
    }
    return {
      response: "Please specify which user to reply to (e.g., 'reply to john').",
    };
  }

  // Search by username
  if (q.includes("find") || q.includes("search") || q.includes("show me")) {
    const username = extractUsername(q);
    if (username) {
      const matchingConversations = data.conversations.filter((c) =>
        c.username.toLowerCase().includes(username)
      );
      if (matchingConversations.length > 0) {
        return {
          response: `Found ${matchingConversations.length} conversation(s) matching "${username}".`,
          dataUpdate: {
            conversations: matchingConversations,
          },
          highlight: matchingConversations.map((c) => c.id),
        };
      }
      return {
        response: `No conversations found matching "${username}".`,
      };
    }
  }

  // Show all / reset filter
  if (q.includes("show all") || q.includes("reset") || q.includes("clear filter")) {
    return {
      response: "Showing all conversations.",
      dataUpdate: data,
      highlight: [],
    };
  }

  // Category statistics
  if (q.includes("statistic") || q.includes("breakdown") || q.includes("summary")) {
    const stats = {
      Support: data.conversations.filter((c) => c.category === "Support").length,
      Sales: data.conversations.filter((c) => c.category === "Sales").length,
      Spam: data.conversations.filter((c) => c.category === "Spam").length,
      General: data.conversations.filter((c) => c.category === "General").length,
    };
    return {
      response: `Category breakdown: Support (${stats.Support}), Sales (${stats.Sales}), Spam (${stats.Spam}), General (${stats.General})`,
    };
  }

  // Auto-reply suggestions
  if (q.includes("suggest") && q.includes("repl")) {
    const supportConversations = data.conversations.filter(
      (c) => c.category === "Support" && c.unread > 0
    );
    if (supportConversations.length > 0) {
      return {
        response: `Found ${supportConversations.length} support requests needing replies. Consider using templates for common issues.`,
        highlight: supportConversations.map((c) => c.id),
      };
    }
    return {
      response: "No urgent messages requiring replies at the moment.",
    };
  }

  // Default response
  return {
    response: "Try: 'Show me support requests', 'How many unread messages?', 'Show sales inquiries', 'Mark as spam', or 'Reply to [username]'.",
  };
}

// Helper function to extract username from query
function extractUsername(query: string): string | null {
  const words = query.toLowerCase().split(/\s+/);
  
  // Common patterns: "reply to john", "find sarah", "mark crypto as spam"
  const patterns = [
    /(?:reply to|find|search|show me|mark)\s+(\w+)/i,
    /(\w+)\s+(?:as spam|messages)/i,
  ];

  for (const pattern of patterns) {
    const match = query.match(pattern);
    if (match && match[1]) {
      return match[1].toLowerCase();
    }
  }

  // If no pattern matches, look for a standalone username after common keywords
  const keywordIndex = words.findIndex((w) =>
    ["to", "find", "search", "show", "mark"].includes(w)
  );
  if (keywordIndex !== -1 && words[keywordIndex + 1]) {
    return words[keywordIndex + 1];
  }

  return null;
}
