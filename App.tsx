
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Solutions from './components/Solutions.tsx';
import SocialMedia from './components/SocialMedia.tsx';
import Footer from './components/Footer.tsx';
import WhatsAppButton from './components/WhatsAppButton.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-brand/10 selection:text-brand">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Solutions />
        <SocialMedia />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;