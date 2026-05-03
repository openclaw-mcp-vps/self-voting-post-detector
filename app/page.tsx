export default function Home() {
  const faqs = [
    {
      q: 'Which platforms does it analyze?',
      a: 'Reddit, Hacker News, and other public platforms. Submit a username or profile URL and the system fetches public activity automatically.'
    },
    {
      q: 'How is the risk score calculated?',
      a: 'Our AI examines posting frequency, timing patterns, upvote ratios, account age, and cross-platform overlap to produce a 0–100 risk score with detailed evidence.'
    },
    {
      q: 'Is my data kept private?',
      a: 'We only analyze publicly available data. No private account data is accessed or stored beyond your session.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Content Moderation AI
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Detect Suspicious{' '}
          <span className="text-[#58a6ff]">Self-Promotion</span>{' '}
          Patterns
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Analyze posting behavior across Reddit, HN, and more. Surface vote manipulation, sock puppets, and coordinated self-promotion — before they damage your community.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Detecting — $49/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Results in seconds.</p>
      </section>

      {/* Feature pills */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: '🔍', label: 'Pattern Analysis', desc: 'Timing, frequency & ratio checks' },
            { icon: '🕵️', label: 'Sock Puppet Detection', desc: 'Cross-account fingerprinting' },
            { icon: '📊', label: 'Risk Scoring', desc: '0–100 score with evidence trail' }
          ].map((f) => (
            <div key={f.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 text-center">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white text-sm mb-1">{f.label}</div>
              <div className="text-xs text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-4xl font-bold text-white mb-1">$49<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#8b949e] text-sm mb-6">Everything included</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited username lookups',
              'Reddit & Hacker News analysis',
              'AI-powered risk scoring',
              'Detailed evidence reports',
              'Export results as PDF/CSV',
              'Priority email support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e]">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Self-Voting Post Detector. All rights reserved.
      </footer>
    </main>
  )
}
