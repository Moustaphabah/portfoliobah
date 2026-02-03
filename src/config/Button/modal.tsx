"use client";

import React, { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
}

export default function Modal({ isOpen, onClose, size = "md", children }: ModalProps) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClass = size === "sm" ? "max-w-sm" : size === "lg" ? "max-w-3xl" : "max-w-md";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/40" onClick={onClose} />

      <div className={`z-10 w-full ${sizeClass} mx-4`}>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <button
              aria-label="Close"
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
            <div className="p-4">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
