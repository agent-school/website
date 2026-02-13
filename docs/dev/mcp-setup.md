# MCP Server Setup

This project uses [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) servers to extend OpenCode/Claude with additional capabilities.

## Quick Start

1. Copy the example config:
   ```bash
   cp opencode.example.jsonc opencode.jsonc
   ```

2. Fill in your API keys in `opencode.jsonc` (see below for where to get them)

3. Restart OpenCode to load the MCP servers

## Available MCP Servers

### 🎨 Design & UI

| Server | Purpose | API Key Required | Get Key From |
|--------|---------|------------------|--------------|
| **figma** | Fetch Figma designs, convert to code | Yes | [Figma Settings](https://www.figma.com/developers/api#access-tokens) → Personal Access Tokens |
| **shadcn** | Generate shadcn/ui components with AI | Yes | [21st.dev](https://21st.dev/magic) → Sign up (free) |
| **miro** | Query Miro boards | No | OAuth via OpenCode |

### 📊 Data & Productivity

| Server | Purpose | API Key Required | Get Key From |
|--------|---------|------------------|--------------|
| **notion** | Query/update Notion pages | Yes | [Notion Integrations](https://www.notion.so/profile/integrations) → New Integration |
| **supabase** | Manage Supabase projects | Yes | [Supabase Settings](https://supabase.com/dashboard/project/_/settings/api) → Project URL + Service Key |

### 🌐 Web & Search

| Server | Purpose | API Key Required | Get Key From |
|--------|---------|------------------|--------------|
| **firecrawl** | Web scraping, crawling, search | Yes | [Firecrawl](https://www.firecrawl.dev/app/api-keys) → Sign up (free tier available) |
| **context7** | Search library docs (React, Next.js, etc.) | No | Free remote server |

### 🛠️ Developer Tools

| Server | Purpose | API Key Required | Get Key From |
|--------|---------|------------------|--------------|
| **github** | GitHub repos, issues, PRs | Yes | [GitHub Settings](https://github.com/settings/tokens) → Personal Access Token (needs `repo` scope) |
| **chrome-devtools** | Browser automation & testing | No | Requires Chrome installed |
| **sequential-thinking** | Deep reasoning for complex problems | No | Built-in MCP server |

## Usage Examples

Once configured, use these in your OpenCode prompts:

```
# Figma → Code
use figma to fetch the design from [figma-url] and implement it

# Generate UI component
/ui create a pricing card with teal gradient background

# Query Notion
use notion to get all tasks from the "Agent School" database

# Web scraping
use firecrawl to scrape https://example.com and extract pricing info

# Search docs
use context7 to find how to implement server actions in Next.js 15

# GitHub operations
use github to create an issue titled "Bug: Navigation broken on mobile"
```

## Troubleshooting

### Server not connecting?
1. Check your API key is correct in `opencode.jsonc`
2. Restart OpenCode completely (close and reopen)
3. Check the MCP server logs in OpenCode's output panel

### Need to disable a server temporarily?
Set `"enabled": false` in the config for that server.

### Want project-specific MCP servers?
The `opencode.jsonc` in this directory only applies to this project. Your global config is at `~/.config/opencode/config.jsonc`.

## Security

- `opencode.jsonc` is in `.gitignore` - **never commit API keys to git**
- Use `opencode.example.jsonc` as a template for teammates
- API keys are stored locally and never sent to OpenCode servers
- Each MCP server only has access to its specific API (e.g., Figma server can't access GitHub)

## More Info

- [OpenCode MCP Docs](https://opencode.ai/docs/mcp-servers/)
- [MCP Protocol Spec](https://modelcontextprotocol.io/)
- [Available MCP Servers](https://github.com/modelcontextprotocol/servers)
