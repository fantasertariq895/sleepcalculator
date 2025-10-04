import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('success');
    setMessage('Thanks for subscribing! Check your inbox for confirmation.');
    setEmail('');

    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 5000);
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Better Sleep Tips Weekly
          </h2>
          <p className="text-lg md:text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of Canadians improving their sleep quality. Get expert tips, sleep science insights, and exclusive resources delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl bg-white/95 backdrop-blur-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 text-lg"
                disabled={status === 'success'}
              />
              <button
                type="submit"
                disabled={status === 'success'}
                className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-gray-50 transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 whitespace-nowrap"
              >
                Subscribe Free
              </button>
            </div>

            {status === 'success' && (
              <div className="mt-4 flex items-center justify-center gap-2 text-white bg-green-500/20 backdrop-blur-sm px-4 py-3 rounded-xl border border-green-400/30">
                <CheckCircle className="w-5 h-5" />
                <p className="text-sm font-medium">{message}</p>
              </div>
            )}

            {status === 'error' && (
              <div className="mt-4 text-red-200 bg-red-500/20 backdrop-blur-sm px-4 py-3 rounded-xl border border-red-400/30">
                <p className="text-sm font-medium">{message}</p>
              </div>
            )}

            <p className="mt-4 text-sm text-indigo-200">
              No spam ever. Unsubscribe anytime. We respect your privacy.
            </p>
          </form>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/80">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10,000+</div>
              <div className="text-sm">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">4.8★</div>
              <div className="text-sm">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-sm">Free Forever</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
