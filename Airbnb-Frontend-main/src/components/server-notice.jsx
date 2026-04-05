import React, { useState, useEffect } from 'react';

export const ServerNotice = () => {
  return (
    <div className="mt-5 sm:mt-6 w-full rounded-lg border border-amber-200 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-800 px-4 py-3">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 text-amber-500 shrink-0" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
        </span>
        <div className="space-y-0.5">
          <p className="text-xs sm:text-sm font-semibold text-amber-800 dark:text-amber-300">
           🛌The Server Was Resting. We Woke It For You.
          </p>
          <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
            Free-tier servers need beauty sleep too. First request may take 30–60 seconds — totally worth the wait.
          </p>
        </div>
      </div>
    </div>
  );
};

export const SearchLoadingNotice = ({ isLoading }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!isLoading) { setSeconds(0); return; }
    const interval = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(interval);
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="w-full rounded-lg border border-blue-200 bg-blue-50 dark:bg-blue-950/30 dark:border-blue-800 px-4 py-3 mb-4">
      <div className="flex items-center gap-3">
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500" />
        </span>
        <div>
          <p className="text-xs sm:text-sm font-semibold text-blue-800 dark:text-blue-300">
            Fetching properties{seconds > 0 ? ` · ${seconds}s` : '…'}
          </p>
          {seconds >= 5 && (
            <p className="text-xs text-blue-700 dark:text-blue-400 mt-0.5 leading-relaxed">
              Our tiny server elves are spinning up — results will appear any moment.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};