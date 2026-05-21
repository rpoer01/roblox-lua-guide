import React from 'react';
import { Info, AlertTriangle, CheckCircle, Lightbulb } from 'lucide-react';
import './Callout.css';

interface CalloutProps {
  type: 'info' | 'warning' | 'success' | 'tip';
  children: React.ReactNode;
}

const Callout: React.FC<CalloutProps> = ({ type, children }) => {
  const icons = {
    info: <Info size={20} />,
    warning: <AlertTriangle size={20} />,
    success: <CheckCircle size={20} />,
    tip: <Lightbulb size={20} />,
  };

  return (
    <div className={`callout callout-${type}`}>
      <div className="callout-icon">{icons[type]}</div>
      <div className="callout-content">{children}</div>
    </div>
  );
};

export default Callout;
