import React from 'react';
import { 
  Smartphone, 
  Globe, 
  Cpu, 
  Server, 
  Layers, 
  Box, 
  Tablet, 
  Code, 
  Layout, 
  Palette, 
  Activity, 
  Zap, 
  Network, 
  Database, 
  GitBranch, 
  Terminal, 
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { FigmaIcon } from './SocialIcons';

interface IconProps {
  name: string;
  className?: string;
}

export const IconRenderer: React.FC<IconProps> = ({ name, className = "w-6 h-6" }) => {
  switch (name) {
    case 'Smartphone': return <Smartphone className={className} />;
    case 'Globe': return <Globe className={className} />;
    case 'Cpu': return <Cpu className={className} />;
    case 'Server': return <Server className={className} />;
    case 'Layers': return <Layers className={className} />;
    case 'Box': return <Box className={className} />;
    case 'Tablet': return <Tablet className={className} />;
    case 'Code': return <Code className={className} />;
    case 'Layout': return <Layout className={className} />;
    case 'Palette': return <Palette className={className} />;
    case 'Activity': return <Activity className={className} />;
    case 'Zap': return <Zap className={className} />;
    case 'Network': return <Network className={className} />;
    case 'Database': return <Database className={className} />;
    case 'GitBranch': return <GitBranch className={className} />;
    case 'Terminal': return <Terminal className={className} />;
    case 'Figma': return <FigmaIcon className={className} />;
    case 'CheckCircle': return <CheckCircle className={className} />;
    default: return <HelpCircle className={className} />;
  }
};
