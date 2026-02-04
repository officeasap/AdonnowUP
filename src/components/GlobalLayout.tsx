// @/components/GlobalLayout.tsx
import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface GlobalLayoutProps {
  children: ReactNode;
}

const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-canvas">
      {/* Navigation would go here */}
      <main>{children}</main>
      
      {/* Global Footer */}
      <footer className="border-t border-border bg-canvas-dark mt-auto">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-secondary text-sm mb-2 md:mb-0">
              East Africa Leading Mineral Trading Since 2013
            </p>
            <div className="text-text-muted text-sm">
              © 2013 Adonnow Trading Limited — All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GlobalLayout;