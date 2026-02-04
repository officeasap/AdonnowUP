// ADONNOW TRADING TERMINAL - Design Tokens
// Central source for all design system variables

export const colors = {
  // 5-Tier Depth System (Charcoal Only)
  depthVoid: 'hsl(0, 0%, 3%)',      // Background abyss
  depth1: 'hsl(0, 0%, 5%)',          // Base layer
  depth2: 'hsl(0, 0%, 8%)',          // Raised surface
  depth3: 'hsl(0, 0%, 12%)',         // Floating panel
  depth4: 'hsl(0, 0%, 15%)',         // Elevated hero
  depth5: 'hsl(0, 0%, 18%)',         // Highest elevation
  
  // Text colors
  textPrimary: 'hsl(0, 0%, 85%)',
  textSecondary: 'hsl(0, 0%, 65%)',
  textMuted: 'hsl(0, 0%, 45%)',
  textHighlight: 'hsl(0, 0%, 95%)',
};

export const shadows = {
  // Neumorphic elevation shadows
  raised: {
    outer: '-4px -4px 8px hsl(0, 0%, 12%), 4px 4px 8px hsl(0, 0%, 2%)',
    inset: 'inset 0 0 0 0.5px hsl(0, 0%, 10%)',
  },
  floating: {
    outer: '-12px -12px 24px hsl(0, 0%, 15%), 12px 12px 24px hsl(0, 0%, 3%), 0 20px 40px rgba(0,0,0,0.4)',
    inset: 'inset 0 0 0 1px hsl(0, 0%, 14%)',
  },
  sunken: {
    outer: 'inset -4px -4px 8px hsl(0, 0%, 12%), inset 4px 4px 8px hsl(0, 0%, 2%)',
    border: '0 0 0 1px hsl(0, 0%, 8%)',
  },
  hero: {
    outer: '-24px -24px 48px hsl(0, 0%, 18%), 24px 24px 48px hsl(0, 0%, 1%), 0 40px 80px rgba(0,0,0,0.5)',
    inset: 'inset 0 0 0 1px hsl(0, 0%, 16%)',
  },
  
  // Haptic typography shadows
  textTier1: '0.5px 0.5px 1px hsl(0, 0%, 0%), -0.5px -0.5px 1px hsl(0, 0%, 20%)',
  textTier2: '1px 1px 2px hsl(0, 0%, 0%), -1px -1px 2px hsl(0, 0%, 20%)',
  textTier3: '2px 2px 4px hsl(0, 0%, 0%), -2px -2px 4px hsl(0, 0%, 24%)',
};

export const gradients = {
  tier1: 'linear-gradient(145deg, hsl(0, 0%, 8%), hsl(0, 0%, 5%))',
  tier2: 'linear-gradient(145deg, hsl(0, 0%, 12%), hsl(0, 0%, 8%))',
  tier3: 'linear-gradient(145deg, hsl(0, 0%, 5%), hsl(0, 0%, 3%))',
  tier4: 'linear-gradient(145deg, hsl(0, 0%, 15%), hsl(0, 0%, 8%))',
  overlay: 'rgba(0, 0, 0, 0.85)',
  
  // Logo gradient
  logo: 'linear-gradient(135deg, hsl(0, 0%, 20%), hsl(0, 0%, 4%), hsl(0, 0%, 20%))',
};

export const spacing = {
  thumbTarget: '52px',
  safeMargin: '16px',
  sidebarWidth: '280px',
  topBarHeight: '72px',
  mainPadding: '48px',
  dockHeight: '80px',
};

export const animation = {
  spring: {
    button: { stiffness: 400, damping: 25 },
    modal: { stiffness: 150, damping: 18 },
    page: { stiffness: 100, damping: 20 },
    gallery: { stiffness: 200, damping: 22 },
  },
  duration: {
    press: 0.12,
    page: 0.3,
    modal: 0.4,
    popup: 0.5,
    gallery: 0.3,
  },
};

export const typography = {
  heading: "'Playfair Display', serif",
  body: "'Inter', sans-serif",
};
