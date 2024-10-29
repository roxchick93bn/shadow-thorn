const Footer = () => {
    const navLinks = [
      { title: 'SHADOWTHORN STUDIOS HOME', href: '#' },
      { title: 'THE BEST GAMES IN CHATGPT', href: '#' },
      { title: 'RE:MONSTER INSPIRED GAME', href: '#' },
      { title: 'SWORD ART ONLINE RPG GAME', href: '#' },
      { title: 'MASTER SOLO LEVELING GAME', href: '#' },
      { title: 'SHANGRI-LA FRONTIER GAME', href: '#' },
      { title: 'BEST ALTERED CARBON GAME', href: '#' },
      { title: 'THE BEST SHIELD HERO GAME', href: '#' },
      { title: 'A SEVEN DEADLY SINS GAME', href: '#' }
    ];
  
    return (
      <footer className="bg-black text-white py-10">
        <div className="container max-w-7xl mx-auto px-4">
          {/* Copyright and Powered By Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <p className="text-[#919191] josefin-font-18 mb-2 sm:mb-0">
              Copyright © 2024 ShadowThorn Studios Games - All Rights Reserved.
            </p>
            <p className="text-[#919191] josefin-font-18">
              Powered by{' '}
              <a 
                href="https://www.godaddy.com" 
                className="text-[#916C3C] hover:text-[#D2A08C] transition-colors duration-200"
              >
                GoDaddy
              </a>
            </p>
          </div>
  
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-white hover:text-[#D2A08C] transition-colors duration-200 text-sm whitespace-nowrap josefin-font-18"
              >
                {link.title}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    );
  };
  
  export default Footer;