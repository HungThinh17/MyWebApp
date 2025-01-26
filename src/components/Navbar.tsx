import React, { FC } from 'react';

// Types
interface NavItem {
  id: string;
  label: string;
  icon: string;
  href: string;
  isActive?: boolean;
}

interface NavbarProps {
  className?: string;
  containerClassName?: string;
}

// Constants
const NAV_ITEMS: NavItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: 'fa fa-home',
    href: '#pigraHome',
    isActive: true
  },
  {
    id: 'about',
    label: 'About',
    icon: 'far fa-address-card',
    href: '#pigraAbout'
  },
  {
    id: 'service',
    label: 'Service',
    icon: 'fab fa-servicestack',
    href: '#pigraService'
  },
  {
    id: 'blog',
    label: 'Blog',
    icon: 'fa fa-blog',
    href: '#pigraBlog'
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: 'fas fa-address-book',
    href: '#pigraContact'
  }
];

// Components
interface NavLinkProps extends NavItem {
  onClick?: (id: string) => void;
}

const NavLink: FC<NavLinkProps> = ({ 
  id, 
  label, 
  icon, 
  href, 
  isActive,
  onClick 
}) => (
  <a 
    href={href}
    className={`nav-item nav-link ${isActive ? 'active' : ''}`}
    onClick={(e) => {
      e.preventDefault();
      onClick?.(id);
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }}
    aria-current={isActive ? 'page' : undefined}
  >
    <span className={icon}></span> {label}
  </a>
);

interface NavLinksProps {
  items: NavItem[];
  onNavItemClick?: (id: string) => void;
}

const NavLinks: FC<NavLinksProps> = ({ items, onNavItemClick }) => (
  <div className="navbar-nav flex-column">
    {items.map((item) => (
      <NavLink 
        key={item.id} 
        {...item} 
        onClick={onNavItemClick}
      />
    ))}
  </div>
);

const Navigation: FC<{ onNavItemClick?: (id: string) => void }> = ({ onNavItemClick }) => (
  <nav className="navbar navbar-light">
    <NavLinks items={NAV_ITEMS} onNavItemClick={onNavItemClick} />
  </nav>
);

const Navbar: FC<NavbarProps> = ({ 
  className = "container-fluid nav-section border-0",
  containerClassName = "navbar navbar-light"
}) => {
  const [activeNavItem, setActiveNavItem] = React.useState('home');

  const handleNavItemClick = (id: string) => {
    setActiveNavItem(id);
  };

  // Update active nav item based on scroll position
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(item => ({
        id: item.id,
        element: document.querySelector(item.href)
      }));

      const currentSection = sections.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveNavItem(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = NAV_ITEMS.map(item => ({
    ...item,
    isActive: item.id === activeNavItem
  }));

  return (
    <div className={className}>
      <nav className={containerClassName}>
        <NavLinks 
          items={navItems} 
          onNavItemClick={handleNavItemClick}
        />
      </nav>
    </div>
  );
};

export default Navbar;
