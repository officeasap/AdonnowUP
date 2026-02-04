// src/services/whatsappService.ts
export interface WhatsAppContext {
  type: 'mineral-inquiry' | 'general-inquiry' | 'emergency';
  mineralType?: string;
  quantity?: string;
  certification?: string;
  vaultService?: string;
}

class WhatsAppService {
  private currentContext: WhatsAppContext | null = null;
  private formOpenCallback: ((context: WhatsAppContext) => void) | null = null;

  // WhatsApp number for Adonnow Trading (replace with actual number)
  private whatsappNumber = '+255772832777'; // Add your actual number
  private encodedPhone = encodeURIComponent(this.whatsappNumber);

  setContext(context: WhatsAppContext) {
    this.currentContext = context;
    localStorage.setItem('whatsappContext', JSON.stringify(context));
  }

  getContext(): WhatsAppContext | null {
    if (!this.currentContext) {
      const stored = localStorage.getItem('whatsappContext');
      if (stored) {
        this.currentContext = JSON.parse(stored);
      }
    }
    return this.currentContext;
  }

  clearContext() {
    this.currentContext = null;
    localStorage.removeItem('whatsappContext');
  }

  onFormOpen(callback: (context: WhatsAppContext) => void) {
    this.formOpenCallback = callback;
  }

  generateWhatsAppMessage(): string {
    const context = this.getContext();
    if (context?.type === 'mineral-inquiry') {
      return `Hello Adonnow Trading, I'm inquiring about ${context.mineralType || 'sovereign minerals'}${context.quantity ? ` (Quantity: ${context.quantity})` : ''}. Please provide acquisition details and pricing.`;
    }
    return "Hello Adonnow Trading, I'm interested in sovereign mineral acquisition and certification services.";
  }

  // Opens WhatsApp in a NEW TAB
  openWhatsAppDirectly(message?: string) {
    const text = message || this.generateWhatsAppMessage();
    const encodedMessage = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${this.encodedPhone}?text=${encodedMessage}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Dispatch event for analytics
    window.dispatchEvent(new CustomEvent('whatsapp-opened', {
      detail: { message: text }
    }));
  }

  // For programmatically opening the chat form
  openChatForm(context?: WhatsAppContext) {
    if (context) {
      this.setContext(context);
    }
    if (this.formOpenCallback && context) {
      this.formOpenCallback(context);
    } else {
      window.dispatchEvent(new Event('open-adonnow-chat'));
    }
  }
}

export const whatsappService = new WhatsAppService();