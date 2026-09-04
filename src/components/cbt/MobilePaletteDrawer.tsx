'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface MobilePaletteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const MobilePaletteDrawer: React.FC<MobilePaletteDrawerProps> = ({
  isOpen,
  onClose,
  children
}) => {
  // Close on Escape key & lock body scroll when open
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Question Palette Drawer"
      className="fixed inset-0 z-50 lg:hidden flex select-none"
    >
      {/* Backdrop with blur */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="relative ml-auto w-[88vw] max-w-sm h-full bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-250">
        {/* Drawer Header with Close Button */}
        <div className="p-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0 safe-top">
          <span className="font-bold text-xs sm:text-sm text-white">
            Question Palette & Status
          </span>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-slate-300 cursor-pointer touch-feedback"
            aria-label="Close Question Palette"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-hidden min-h-0">
          {children}
        </div>
      </div>
    </div>
  );
};

