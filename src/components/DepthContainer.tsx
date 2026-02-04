// @/components/DepthContainer.tsx
import { ReactNode } from 'react';

interface DepthContainerProps {
  children: ReactNode;
  className?: string;
  depth?: 'engraved' | 'raised' | 'flat';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const DepthContainer: React.FC<DepthContainerProps> = ({ 
  children, 
  className = '', 
  depth = 'raised',
  padding = 'md'
}) => {
  const depthClasses = {
    engraved: 'shadow-permanent-engraved border-2 border-border-dark',
    raised: 'shadow-permanent border border-border',
    flat: ''
  };
  
  const paddingClasses = {
    none: '',
    sm: 'p-4 md:p-5',
    md: 'p-5 md:p-6',
    lg: 'p-6 md:p-8'
  };
  
  return (
    <div className={`
      rounded-xl 
      bg-canvas 
      ${depthClasses[depth]} 
      ${paddingClasses[padding]} 
      ${className}
    `}>
      {children}
    </div>
  );
};

export default DepthContainer;
