// ADONNOW SOVEREIGN PWA INSTALLER - NO BULLSHIT, INSTANT INSTALL
// ==============================================================

class AdonnowSovereignInstaller {
  constructor() {
    this.deferredPrompt = null;
    this.isInstalled = false;
    this.installButtons = ['install-app', 'install-app-footer', 'install-app-login'];
    this.init();
  }

  init() {
    console.log('⚡ SOVEREIGN INSTALLER INITIALIZED');
    
    // CHECK IF ALREADY INSTALLED
    this.checkIfInstalled();
    
    // LISTEN FOR INSTALL PROMPT
    window.addEventListener('beforeinstallprompt', (e) => {
      console.log('🚀 PWA INSTALL READY');
      e.preventDefault();
      this.deferredPrompt = e;
      this.showInstallReady();
    });

    // LISTEN FOR SUCCESSFUL INSTALLATION
    window.addEventListener('appinstalled', () => {
      console.log('✅ APP INSTALLED SUCCESSFULLY');
      this.isInstalled = true;
      this.deferredPrompt = null;
      this.showInstalledState();
    });

    // ATTACH CLICK HANDLERS
    this.attachSovereignHandlers();
  }

  checkIfInstalled() {
    // Check display mode
    if (window.matchMedia('(display-mode: standalone)').matches) {
      this.isInstalled = true;
      this.showInstalledState();
      return true;
    }
    
    // Check iOS standalone
    if (window.navigator.standalone === true) {
      this.isInstalled = true;
      this.showInstalledState();
      return true;
    }
    
    return false;
  }

  attachSovereignHandlers() {
    this.installButtons.forEach(id => {
      const button = document.getElementById(id);
      if (button) {
        // Remove any existing handlers
        button.replaceWith(button.cloneNode(true));
        const freshButton = document.getElementById(id);
        
        // Add sovereign handler
        freshButton.addEventListener('click', (e) => this.handleSovereignInstall(e));
        
        // Remove href if it's an anchor
        if (freshButton.tagName === 'A') {
          freshButton.removeAttribute('href');
        }
      }
    });
  }

  handleSovereignInstall(e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    
    console.log('🖱️ SOVEREIGN INSTALL TRIGGERED');
    
    if (this.isInstalled) {
      this.showSovereignToast('✅ Adonnow Mineral Portal is already installed on your device.');
      return;
    }

    if (!this.deferredPrompt) {
      // DIRECT BROWSER INSTRUCTION - NO BULLSHIT
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      
      if (isIOS || isSafari) {
        this.showSovereignInstruction('iOS/Safari: Tap Share → Add to Home Screen');
      } else {
        this.showSovereignInstruction('Look for "Install" in your browser menu');
      }
      return;
    }

    // IMMEDIATE INSTALL - NO DELAYS, NO BULLSHIT
    try {
      // Trigger install immediately
      this.deferredPrompt.prompt();
      
      // Handle user choice
      this.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('✅ USER ACCEPTED INSTALLATION');
          // Installation proceeds automatically
        } else {
          console.log('⚠️ USER DECLINED INSTALLATION');
          // Keep prompt available for next time
        }
        this.deferredPrompt = null;
      });
    } catch (error) {
      console.error('❌ INSTALL ERROR:', error);
      this.showSovereignInstruction('Use browser menu to install');
    }
  }

  showInstallReady() {
    // Add pulse animation to install buttons
    this.installButtons.forEach(id => {
      const button = document.getElementById(id);
      if (button) {
        button.classList.add('pulse');
        
        // Update alt text on images
        const img = button.querySelector('img');
        if (img) {
          img.alt = img.alt.replace('Download', 'Install');
        }
      }
    });
    
    // Show install hint
    this.showSovereignHint('🚀 Click to install directly to your device');
  }

  showInstalledState() {
    this.installButtons.forEach(id => {
      const button = document.getElementById(id);
      if (button) {
        button.classList.remove('pulse');
        button.style.opacity = '0.7';
        button.style.cursor = 'default';
        
        // Update alt text
        const img = button.querySelector('img');
        if (img) {
          img.alt = img.alt.replace('Install', 'Installed ✓');
        }
      }
    });
  }

  showSovereignHint(message) {
    const hint = document.createElement('div');
    hint.innerHTML = `
      <div style="
        position: fixed;
        bottom: 100px;
        right: 30px;
        background: #000000;
        color: #d4af37;
        padding: 12px 20px;
        border-radius: 10px;
        border: 2px solid #d4af37;
        font-weight: 600;
        font-size: 14px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
        box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3);
      ">
        ${message}
        <button onclick="this.parentElement.parentElement.remove()" style="
          background: none;
          border: none;
          color: #d4af37;
          position: absolute;
          top: 5px;
          right: 8px;
          font-size: 18px;
          cursor: pointer;
          padding: 0;
          line-height: 1;
        ">×</button>
      </div>
    `;
    document.body.appendChild(hint);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      if (hint.parentNode) {
        hint.style.opacity = '0';
        hint.style.transition = 'opacity 0.5s ease';
        setTimeout(() => hint.remove(), 500);
      }
    }, 5000);
  }

  showSovereignInstruction(message) {
    this.showSovereignHint(message);
  }

  showSovereignToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      bottom: 100px;
      right: 30px;
      background: #10B981;
      color: white;
      padding: 14px 24px;
      border-radius: 10px;
      font-weight: 600;
      font-size: 14px;
      z-index: 10000;
      animation: slideIn 0.3s ease;
      max-width: 300px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.5s ease';
      setTimeout(() => toast.remove(), 500);
    }, 3000);
  }
}

// IMMEDIATE INITIALIZATION - NO WAITING FOR DOM READY
console.log('⚡ SOVEREIGN INSTALLER LOADING...');
window.adonnowInstaller = new AdonnowSovereignInstaller();

// ADD SOVEREIGN STYLES IMMEDIATELY
const sovereignStyle = document.createElement('style');
sovereignStyle.textContent = `
  @keyframes pulse {
    0% { transform: scale(1); box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3); }
    50% { transform: scale(1.03); box-shadow: 0 6px 30px rgba(212, 175, 55, 0.5); }
    100% { transform: scale(1); box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3); }
  }
  
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  .pulse {
    animation: pulse 2s infinite;
  }
  
  .download-banner {
    cursor: pointer !important;
    transition: all 0.2s ease !important;
  }
  
  .download-banner:hover {
    transform: translateY(-2px) !important;
  }
  
  .download-banner:active {
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(sovereignStyle);