// @/components/LogoFrame.tsx
interface LogoFrameProps {
  className?: string;
  variant?: 'default' | 'raised' | 'engraved';
}

const LogoFrame: React.FC<LogoFrameProps> = ({ 
  className = '', 
  variant = 'default' 
}) => {
  const variantClasses = {
    default: 'shadow-permanent border-2 border-border bg-canvas',
    raised: 'shadow-permanent border-2 border-border-dark bg-canvas-dark',
    engraved: 'shadow-permanent-engraved border-2 border-border-dark bg-canvas'
  };

  return (
    <div className={`
      relative
      w-48 h-16
      flex items-center justify-center
      ${variantClasses[variant]}
      ${className}
    `}>
      <img
        src="/images/LogoAdonnowOfficial.png"
        alt="Adonnow Trading Limited"
        className="h-10 w-auto object-contain"
      />
    </div>
  );
};

export default LogoFrame;