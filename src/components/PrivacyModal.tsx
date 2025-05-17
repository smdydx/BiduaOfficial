import React, { useEffect, useState } from "react";

interface PrivacyModalProps {
  open: boolean;
  onAccept: () => void;
  policyUrl?: string;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ 
  open, 
  onAccept,
  policyUrl = "/privacy-policy"
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (open) {
      // Small delay to allow the component to mount before animation
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className={`fixed inset-x-0 bottom-0 bg-black/40 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`bg-white w-full max-w-full shadow-lg transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-800 mb-1">Privacy & Cookies</h2>
              <p className="text-sm text-gray-600">
                We use cookies and similar technologies to provide a better experience and analyze usage. 
                By continuing to use our site, you consent to our <a href={policyUrl} className="text-blue-600 hover:underline font-medium">Privacy Policy</a>.
              </p>
            </div>
            <div className="flex-shrink-0 flex gap-2">
              <button 
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                onClick={onAccept}
              >
                Settings
              </button>
              <button
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                onClick={onAccept}
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;