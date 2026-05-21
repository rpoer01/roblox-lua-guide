import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Terminal, 
  Layers, 
  Target, 
  Cpu, 
  Globe, 
  ShieldCheck, 
  MousePointer2,
  Box,
  Rocket
} from 'lucide-react';
import { robloxContent, type ContentBlock } from './content';
import Sidebar from './components/Sidebar';
import Card from './components/Card';
import Callout from './components/Callout';
import './App.css';

const iconMap: Record<string, React.ReactNode> = {
  'Client ใน Roblox คืออะไร': <Globe size={24} />,
  'Roblox Client Script มีอะไรบ้าง': <Terminal size={24} />,
  'สิ่งที่ Client ทำได้แบบเทพๆ': <Zap size={24} />,
  'Raycast คืออะไร': <Target size={24} />,
  'FastCast คืออะไร': <Rocket size={24} />,
  'Framework ฝั่ง Client ที่นิยม': <Layers size={24} />,
  'Client Optimization': <Cpu size={24} />,
  'Networking สำคัญมาก': <ShieldCheck size={24} />,
  'Hitbox System': <Box size={24} />,
  'ถ้าจะทำ FPS จริงจัง': <MousePointer2 size={24} />,
};

function App() {
  const renderBlock = (block: ContentBlock, index: number) => {
    const motionProps = {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: index * 0.05 }
    };

    switch (block.type) {
      case 'heading': {
        const HeadingTag = `h${block.level || 1}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
        const id = block.content!.replace(/\s+/g, '-').toLowerCase();
        const icon = block.level === 1 ? iconMap[block.content!] : null;
        
        if (block.content === 'Client ใน Roblox คืออะไร') {
          return (
            <motion.div {...motionProps} key={index} className="comparison-section">
              <div className="heading-wrapper">
                <div className="heading-icon">{iconMap[block.content]}</div>
                <HeadingTag id={id}>{block.content}</HeadingTag>
              </div>
              <div className="comparison-grid">
                <Card title="Client (ผู้เล่น)" icon={<Globe size={20} />}>
                  <ul style={{ paddingLeft: '1.2rem', marginBottom: '1rem' }}>
                    <li>การแสดงผล & Rendering</li>
                    <li>กล้อง & UI</li>
                    <li>Input & Animation</li>
                    <li>เอฟเฟกต์ & เสียง</li>
                    <li>ความลื่นไหลของเกม</li>
                  </ul>
                  <Callout type="info">สิ่งที่ผู้เล่นมองเห็น</Callout>
                </Card>
                <Card title="Server (ตัวกลาง)" icon={<ShieldCheck size={20} />}>
                  <ul style={{ paddingLeft: '1.2rem', marginBottom: '1rem' }}>
                    <li>ความจริงของเกม</li>
                    <li>การคำนวณดาเมจ</li>
                    <li>การจัดการข้อมูลผู้เล่น</li>
                    <li>การเชื่อมต่อเครือข่าย</li>
                    <li>ความปลอดภัย (Anti-Cheat)</li>
                  </ul>
                  <Callout type="success">ความจริงของเกม</Callout>
                </Card>
              </div>
            </motion.div>
          );
        }

        return (
          <motion.div {...motionProps} key={index} className="heading-wrapper">
            {icon && <div className="heading-icon">{icon}</div>}
            <HeadingTag id={id}>{block.content}</HeadingTag>
          </motion.div>
        );
      }
      case 'paragraph':
        if (block.content?.includes('TIP:') || block.content?.includes('ควรระวัง:')) {
            return (
                <motion.div {...motionProps} key={index}>
                    <Callout type={block.content.includes('TIP') ? 'tip' : 'warning'}>
                        {block.content.replace(/TIP:|ควรระวัง:/, '').trim()}
                    </Callout>
                </motion.div>
            );
        }
        return <motion.p {...motionProps} key={index}>{block.content}</motion.p>;
      case 'code':
        return (
          <motion.div {...motionProps} key={index} className="code-container">
            <div className="code-header">
              <span className="code-lang">{block.language}</span>
              <button className="copy-button" onClick={() => navigator.clipboard.writeText(block.content!)}>
                Copy
              </button>
            </div>
            <SyntaxHighlighter 
              language={block.language} 
              style={vscDarkPlus} 
              customStyle={{ margin: 0, borderRadius: '0 0 12px 12px' }}
            >
              {block.content!}
            </SyntaxHighlighter>
          </motion.div>
        );
      case 'list':
        return (
          <motion.ul {...motionProps} key={index}>
            {block.items?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </motion.ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="App-container">
      <Sidebar />
      <div className="App">
        <header className="App-header">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Roblox Lua Client Mastery</h1>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              คู่มือการพัฒนาฝั่ง Client แบบเจาะลึก เพื่อเกมที่ลื่นไหลและสมจริง
            </p>
          </motion.div>
        </header>
        <main className="App-main">
          {robloxContent.map((block, index) => renderBlock(block, index))}
        </main>
        <footer style={{ marginTop: '5rem', padding: '2rem 0', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-muted)' }}>© 2024 Roblox Development Tutorial. Optimized for AAA experience.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
