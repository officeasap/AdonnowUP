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
// Adonnow chat service
// ===============================
class AdonnowChatService {
  private static instance: AdonnowChatService;

  static getInstance(): AdonnowChatService {
    if (!AdonnowChatService.instance) {
      AdonnowChatService.instance = new AdonnowChatService();
    }
    return AdonnowChatService.instance;
  }

  openWhatsAppDirectly(message: string) {
    const encoded = encodeURIComponent(message);
    window.open(
      `https://wa.me/255772832777?text=${encoded}`,
      '_blank',
      'noopener,noreferrer'
    );
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
      {/* Floating Trigger Button */}
      <button
        className="fixed bottom-8 right-8 z-50 p-4 rounded-[16px] bg-[#d8ccb2]
        shadow-[0_10px_30px_rgba(0,0,0,0.9)]
        hover:scale-110 transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle className="w-6 h-6 text-[#121212]" />
      </button>

      {isOpen && (
        <div
          className="fixed z-50 w-[420px] max-h-[90vh]
          top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          bg-[#121212] border-2 border-[#d8ccb2]
          rounded-[18px] flex flex-col overflow-hidden
          shadow-[0_35px_90px_rgba(0,0,0,1)]"
        >
          {/* Header */}
          <div className="p-4 border-b-2 border-[#d8ccb2] flex items-center justify-between">
            <img
              src="/images/LogoAdonnowOfficial.png"
              alt="Adonnow Trading"
              className="h-9 object-contain"
            />
            <button onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5 text-[#d8ccb2]" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-4 overflow-y-auto">
            {/* Text Area */}
            <textarea
              ref={textareaRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full min-h-[110px] p-4 bg-[#0a0a0a]
              border-2 border-[#d8ccb2] rounded-[16px]
              text-[#d8ccb2] resize-none text-sm"
              placeholder="Type your inquiry…"
            />

            {/* Inquiry Buttons Grid */}
            <div className="grid grid-cols-2 gap-3">
              {inquiryButtons.map((btn, i) => (
                <button
                  key={i}
                  onClick={btn.onClick}
                  className="py-2 px-3 rounded-[14px]
                  bg-[#141312] text-[#d8ccb2]
                  font-semibold text-xs
                  flex items-center justify-between
                  shadow-[0_6px_16px_rgba(0,0,0,0.85)]
                  hover:scale-[1.02] transition-all"
                >
                  <span className="flex items-center gap-2">
                    {btn.icon}
                    {btn.label}
                  </span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <button
              onClick={handleSend}
              disabled={!message.trim()}
              className="w-full py-4 rounded-[16px]
              bg-[#d8ccb2] text-[#121212]
              font-bold text-sm
              shadow-[0_10px_28px_rgba(0,0,0,1)]
              flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              CHAT ON WHATSAPP
              <ChevronRight className="w-4 h-4" />
            </button>

            <p className="text-[11px] text-center text-[#d8ccb2]/70">
              📱 Chat with Adonnow Trading Limited on WhatsApp
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingChat;
