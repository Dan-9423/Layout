import { useState } from 'react';
import { ChevronDown, LayoutDashboard, Users, Settings, BarChart2, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MenuItem {
  title: string;
  icon: JSX.Element;
  submenu?: { title: string; path: string }[];
}

export default function Sidebar() {
  const [expandedMenu, setExpandedMenu] = useState<string | null>('Dashboard');
  const [selectedSubmenu, setSelectedSubmenu] = useState<string>('Overview');

  const menuItems: MenuItem[] = [
    {
      title: 'Dashboard',
      icon: <LayoutDashboard className="w-5 h-5" />,
      submenu: [
        { title: 'Overview', path: '/overview' },
        { title: 'Analytics', path: '/analytics' },
        { title: 'Reports', path: '/reports' },
      ],
    },
    {
      title: 'Users',
      icon: <Users className="w-5 h-5" />,
      submenu: [
        { title: 'All Users', path: '/users' },
        { title: 'User Groups', path: '/user-groups' },
        { title: 'Permissions', path: '/permissions' },
      ],
    },
    {
      title: 'Analytics',
      icon: <BarChart2 className="w-5 h-5" />,
      submenu: [
        { title: 'Statistics', path: '/statistics' },
        { title: 'Performance', path: '/performance' },
        { title: 'Metrics', path: '/metrics' },
      ],
    },
    {
      title: 'Reports',
      icon: <FileText className="w-5 h-5" />,
      submenu: [
        { title: 'Daily', path: '/daily-reports' },
        { title: 'Weekly', path: '/weekly-reports' },
        { title: 'Monthly', path: '/monthly-reports' },
      ],
    },
    {
      title: 'Settings',
      icon: <Settings className="w-5 h-5" />,
    },
  ];

  return (
    <div className="w-64 bg-white dark:bg-gray-800 shadow-lg h-screen rounded-tr-2xl rounded-br-2xl">
      <div className="p-4">
        <div className="flex items-center justify-between mb-8">
          <span className="text-xl font-bold text-blue-600 dark:text-blue-400">System Name</span>
        </div>
        <nav>
          {menuItems.map((item) => (
            <div key={item.title}>
              <button
                onClick={() => setExpandedMenu(expandedMenu === item.title ? null : item.title)}
                className={cn(
                  'w-full flex items-center justify-between p-3 rounded-lg mb-1 transition-colors',
                  expandedMenu === item.title
                    ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-300'
                )}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span className="font-medium">{item.title}</span>
                </div>
                {item.submenu && (
                  <ChevronDown
                    className={cn(
                      'w-4 h-4 transition-transform',
                      expandedMenu === item.title ? 'transform rotate-180' : ''
                    )}
                  />
                )}
              </button>
              {item.submenu && expandedMenu === item.title && (
                <div className="relative ml-4 mb-2">
                  {/* Default black vertical bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600" />
                  {item.submenu.map((sub) => {
                    const isSelected = selectedSubmenu === sub.title;
                    return (
                      <div key={sub.title} className="relative group">
                        {/* Blue vertical bar on hover and selection */}
                        <div className={cn(
                          'absolute left-0 top-0 bottom-0 w-0.5 transition-colors',
                          isSelected ? 'bg-blue-600' : 'bg-transparent group-hover:bg-blue-400'
                        )} />
                        <button
                          onClick={() => setSelectedSubmenu(sub.title)}
                          className={cn(
                            'w-full text-left p-2 pl-4 rounded-lg mb-1 transition-colors text-sm',
                            isSelected
                              ? 'bg-blue-500 dark:bg-blue-600 text-white'
                              : 'hover:bg-gray-50 dark:hover:bg-gray-700/50 text-gray-600 dark:text-gray-400'
                          )}
                        >
                          {sub.title}
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}