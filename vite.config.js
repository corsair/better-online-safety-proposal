import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Custom plugin to handle markdown files with frontmatter
const markdownPlugin = () => {
  return {
    name: 'markdown-loader',
    transform(code, id) {
      if (id.endsWith('.md')) {
        // Parse frontmatter and content
        const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/
        const match = code.match(frontmatterRegex)
        
        if (match) {
          const [, frontmatter, content] = match
          const metadata = {}
          
          // Parse frontmatter
          frontmatter.split('\n').forEach(line => {
            const colonIndex = line.indexOf(':')
            if (colonIndex > 0) {
              const key = line.substring(0, colonIndex).trim()
              const value = line.substring(colonIndex + 1).trim().replace(/^["']|["']$/g, '')
              metadata[key] = value
            }
          })
          
          // Return as JavaScript module
          return {
            code: `export default ${JSON.stringify({ ...metadata, content })}`,
            map: null
          }
        } else {
          // No frontmatter, treat as content only
          return {
            code: `export default { content: ${JSON.stringify(code)} }`,
            map: null
          }
        }
      }
    }
  }
}

export default defineConfig({
  plugins: [vue(), markdownPlugin()],
  server: {
    port: 3000,
    open: true
  }
}) 