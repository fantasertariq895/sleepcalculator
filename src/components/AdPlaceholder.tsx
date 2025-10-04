interface AdPlaceholderProps {
  slot: 'header' | 'content' | 'sidebar';
  className?: string;
}

export default function AdPlaceholder({ slot, className = '' }: AdPlaceholderProps) {
  const dimensions = {
    header: 'h-24 md:h-32',
    content: 'h-64',
    sidebar: 'h-72 md:h-96'
  };

  return (
    <div
      className={`bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center ${dimensions[slot]} ${className}`}
    >
      <div className="text-center p-4">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
          Advertisement
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-500">
          Google AdSense {slot} banner
        </p>
      </div>
    </div>
  );
}
