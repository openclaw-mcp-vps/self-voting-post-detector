import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Self-Voting Post Detector — Detect Suspicious Self-Promotion Patterns',
  description: 'AI tool that analyzes posting patterns to identify vote manipulation, sock puppets, and coordinated self-promotion across Reddit, HN, and other platforms.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2aa9e8d1-1351-4881-bac6-723eb033cdd3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
