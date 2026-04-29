import { useState } from 'react';
import Q1 from './components/Q1';
import Q2 from './components/Q2';
import Q3 from './components/Q3';
import Q4 from './components/Q4';
import Q5 from './components/Q5';
import Q6 from './components/Q6';
import Q7 from './components/Q7';

function App() {
  const [activeTab, setActiveTab] = useState(1);

  const renderContent = () => {
    switch (activeTab) {
      case 1: return <Q1 />;
      case 2: return <Q2 />;
      case 3: return <Q3 />;
      case 4: return <Q4 />;
      case 5: return <Q5 />;
      case 6: return <Q6 />;
      case 7: return <Q7 />;
      default: return <Q1 />;
    }
  };

  const navItems = [
    { id: 1, title: 'Q1: Calculator (Props)' },
    { id: 2, title: 'Q2: Interest (Constructor)' },
    { id: 3, title: 'Q3: Student Info' },
    { id: 4, title: 'Q4: Product Manager' },
    { id: 5, title: 'Q5: Payroll System' },
    { id: 6, title: 'Q6: React Hooks Demo' },
    { id: 7, title: 'Q7: Auth System' },
  ];

  return (
    <div className="app-container">
      <aside className="sidebar">
        <h1 className="sidebar-title">Practical 17</h1>
        <nav>
          {navItems.map((item) => (
            <div
              key={item.id}
              className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              {item.title}
            </div>
          ))}
        </nav>
      </aside>
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
