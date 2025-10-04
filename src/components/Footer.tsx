import { Moon, FileText, Shield, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-indigo-500 to-violet-600 rounded-lg p-2">
                <Moon className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Sleep Calculator</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Calculate optimal sleep schedules based on 90-minute sleep cycles. Wake up feeling refreshed
              and energized every morning with our free, science-based sleep calculator.
            </p>
            <p className="text-sm text-gray-400">
              © SleepCalculators.ca {currentYear}. All Rights Reserved.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#calculator"
                  className="text-gray-300 hover:text-indigo-400 transition-colors flex items-center"
                >
                  Calculator
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-300 hover:text-indigo-400 transition-colors flex items-center"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#sleep-tips"
                  className="text-gray-300 hover:text-indigo-400 transition-colors flex items-center"
                >
                  Sleep Tips
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-300 hover:text-indigo-400 transition-colors flex items-center"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-300 hover:text-indigo-400 transition-colors flex items-center"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-300 hover:text-indigo-400 transition-colors flex items-center"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/disclaimer"
                  className="text-gray-300 hover:text-indigo-400 transition-colors flex items-center"
                >
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="text-center text-sm text-gray-400">
            <p className="mb-2">
              <strong>Medical Disclaimer:</strong> The information provided by this sleep calculator is for
              educational and informational purposes only and should not be considered medical advice.
            </p>
            <p>
              Always consult with a qualified healthcare provider regarding any sleep disorders or health concerns.
            </p>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-500">
          <p>Made with care for better sleep 💤</p>
        </div>
      </div>
    </footer>
  );
}
