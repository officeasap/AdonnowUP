import React, { useState, useRef, useEffect } from 'react'; // ADD useEffect
import {
  MessageCircle,
  X,
  Send,
  ChevronRight,
  Gem,
  Shield,
  FileText,
  Building
} from 'lucide-react';

// ===============================
// Adonnow chat service - FIXED FOR MOBILE
// ===============================
class AdonnowChatService {
  private static instance: AdonnowChatService;

  static getInstance(): AdonnowChatService {
    if (!AdonnowChatService.instance) {
      AdonnowChatService.instance = new AdonnowChatService();
    }
    return AdonnowChatService.instance;
  }

  // SMART WhatsApp deep link that works on all devices
  openWhatsAppDirectly(message: string) {
    const phoneNumber = '255772832777'; // Adonnow Trading WhatsApp
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp deep link URLs
    const whatsappAppUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
    const whatsappWebUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // For mobile devices - try to open WhatsApp app first
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      // Create an invisible iframe to test if WhatsApp is installed
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = whatsappAppUrl;
      
      // If WhatsApp opens, it will navigate away. If not, fallback to web.
      iframe.onload = () => {
        // If iframe is still here after 2 seconds, WhatsApp isn't installed
        setTimeout(() => {
          if (document.body.contains(iframe)) {
            document.body.removeChild(iframe);
            // Fallback to web WhatsApp
            window.open(whatsappWebUrl, '_blank', 'noopener,noreferrer');
          }
        }, 2000);
      };
      
      document.body.appendChild(iframe);
      
      // Also try direct navigation as fallback
      setTimeout(() => {
        window.location.href = whatsappAppUrl;
      }, 100);
      
    } else {
      // For desktop/laptop - open in new tab
      window.open(whatsappWebUrl, '_blank', 'noopener,noreferrer');
    }
  }
}

const adonnowService = AdonnowChatService.getInstance();

// ===============================
// Button config
// ===============================
interface InquiryButton {
  label: string;
  onClick: () => void;
  icon: JSX.Element;
}

// ===============================
// Floating Chat Component
// ===============================
const FloatingChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // ADD THIS EVENT LISTENER
  useEffect(() => {
    console.log('FloatingChat mounted, setting up event listener...');
    
    const handleOpenChatEvent = (event: Event) => {
      console.log('📢 open-adonnow-chat event received!', event);
      const customEvent = event as CustomEvent;
      console.log('Event detail:', customEvent.detail);
      
      // Open the chat
      setIsOpen(true);
      
      // Auto-fill message based on mineral
      if (customEvent.detail?.mineral) {
        const mineral = customEvent.detail.mineral;
        const type = customEvent.detail.type || 'inquiry';
        const title = customEvent.detail.title || mineral;
        
        setMessage(`Hello Adonnow Trading, I'm interested in ${title}. Please provide details on availability and pricing.`);
      }
    };

    // Listen for the event
    window.addEventListener('open-adonnow-chat', handleOpenChatEvent as EventListener);
    
    // Cleanup
    return () => {
      window.removeEventListener('open-adonnow-chat', handleOpenChatEvent as EventListener);
    };
  }, []);

  const handleSend = () => {
    if (!message.trim()) return;
    adonnowService.openWhatsAppDirectly(message);
    setIsOpen(false);
    setMessage('');
  };

  const handleMineral = (mineral: string) => {
    setMessage(
      `Hello Adonnow Trading, I'm interested in ${mineral}. Please provide details on availability and pricing.`
    );
  };

  const inquiryButtons: InquiryButton[] = [
    { label: 'GOLD ACQUISITION', onClick: () => handleMineral('Gold'), icon: <Gem className="w-4 h-4" /> },
    { label: 'COLTAN SOURCING', onClick: () => handleMineral('Coltan'), icon: <Gem className="w-4 h-4" /> },
    { label: 'TANZANITE COLLECTION', onClick: () => handleMineral('Tanzanite'), icon: <Gem className="w-4 h-4" /> },
    { label: 'TRADING DESK', onClick: () => handleMineral('Trading Desk'), icon: <Building className="w-4 h-4" /> },
    { label: 'CERTIFICATION', onClick: () => handleMineral('Certification'), icon: <Shield className="w-4 h-4" /> },
    { label: 'GENERAL INQUIRY', onClick: () => handleMineral('General Inquiry'), icon: <FileText className="w-4 h-4" /> }
  ];

  return (
    <>
      {/* Floating Trigger Button - Mobile Optimized */}
      <button
        className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-50 p-3 md:p-4 rounded-[16px] bg-[#d8ccb2]
        shadow-[0_10px_30px_rgba(0,0,0,0.9)]
        hover:scale-110 active:scale-95 transition-all duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-[#121212]" />
      </button>

      {isOpen && (
        <div
          className="fixed z-50 w-[90vw] max-w-[420px] max-h-[85vh]
          top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          bg-[#121212] border-2 border-[#d8ccb2]
          rounded-[18px] flex flex-col overflow-hidden
          shadow-[0_35px_90px_rgba(0,0,0,1)]"
          style={{ 
            height: 'auto',
            maxHeight: 'calc(100vh - 40px)'
          }}
        >
          {/* Header - Mobile Optimized */}
          <div className="p-3 md:p-4 border-b-2 border-[#d8ccb2] flex items-center justify-between">
            <img
              src="/images/LogoAdonnowOfficial.png"
              alt="Adonnow Trading"
              className="h-7 md:h-9 object-contain"
            />
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 md:p-0"
            >
              <X className="w-4 h-4 md:w-5 md:h-5 text-[#d8ccb2]" />
            </button>
          </div>

          {/* Body - Mobile Optimized */}
          <div className="p-3 md:p-4 space-y-3 md:space-y-4 overflow-y-auto flex-1">
            {/* Text Area - Mobile Optimized */}
            <textarea
              ref={textareaRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full min-h-[90px] md:min-h-[110px] p-3 md:p-4 bg-[#0a0a0a]
              border-2 border-[#d8ccb2] rounded-[16px]
              text-[#d8ccb2] resize-none text-sm md:text-base
              text-sm"
              placeholder="Type your inquiry…"
              style={{ fontSize: '14px' }}
            />

            {/* Inquiry Buttons Grid - Mobile Optimized */}
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              {inquiryButtons.map((btn, i) => (
                <button
                  key={i}
                  onClick={btn.onClick}
                  className="py-2 px-2 md:py-2 md:px-3 rounded-[12px] md:rounded-[14px]
                  bg-[#141312] text-[#d8ccb2]
                  font-semibold text-[10px] md:text-xs
                  flex items-center justify-between
                  shadow-[0_4px_12px_rgba(0,0,0,0.85)] md:shadow-[0_6px_16px_rgba(0,0,0,0.85)]
                  hover:scale-[1.02] active:scale-95 transition-all duration-150"
                  style={{ minHeight: '44px' }}
                >
                  <span className="flex items-center gap-1 md:gap-2 truncate">
                    {React.cloneElement(btn.icon, { className: "w-3 h-3 md:w-4 md:h-4" })}
                    <span className="truncate">{btn.label}</span>
                  </span>
                  <ChevronRight className="w-2 h-2 md:w-3 md:h-3 flex-shrink-0" />
                </button>
              ))}
            </div>

            {/* WhatsApp CTA - Mobile Optimized - FIXED TEXT COLOR */}
            <button
              onClick={handleSend}
              disabled={!message.trim()}
              className="w-full py-3 md:py-4 rounded-[14px] md:rounded-[16px]
              bg-[#d8ccb2] text-[#121212] font-bold text-xs md:text-sm
              shadow-[0_8px_24px_rgba(0,0,0,1)] md:shadow-[0_10px_28px_rgba(0,0,0,1)]
              flex items-center justify-center gap-2
              active:scale-95 transition-all duration-150"
              style={{ 
                height: '48px',
                color: '#121212 !important',
                fontWeight: '700'
              }}
            >
              <Send className="w-3 h-3 md:w-4 md:h-4 text-[#121212]" />
              <span style={{ color: '#121212' }}>CHAT ON WHATSAPP</span>
              <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-[#121212]" />
            </button>

            <p className="text-[10px] md:text-[11px] text-center text-[#d8ccb2]/70 px-2">
              📱 Opens WhatsApp directly on your device
            </p>
          </div>
        </div>
      )}

      {/* Mobile-specific Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/70 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default FloatingChat;
