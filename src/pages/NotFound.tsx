import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, Moon, Search } from 'lucide-react';

export default function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | SleepCalculators.ca</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to SleepCalculators.ca to find your perfect sleep schedule." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 px-4">
        <div className="max-w-2xl w-full text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-500 to-violet-600 rounded-full p-6 animate-pulse">
                <Moon className="w-16 h-16 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 bg-amber-400 rounded-full p-2">
                <Search className="w-6 h-6 text-amber-900" />
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 mb-4">
            404
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Oops! Page Not Found
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
            It looks like this page took a permanent nap. Let's get you back to calculating your perfect sleep schedule.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>

            <Link
              to="/#calculator"
              className="inline-flex items-center px-8 py-4 bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-semibold rounded-full border-2 border-indigo-600 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-700 transition-all duration-200"
            >
              <Moon className="w-5 h-5 mr-2" />
              Try Calculator
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Common pages you might be looking for:
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/privacy-policy"
                className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <Link
                to="/terms"
                className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                Terms of Service
              </Link>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <Link
                to="/disclaimer"
                className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
