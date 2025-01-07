import NotificationBell from './NotificationBell';
import ThemeToggle from './ThemeToggle';
import UserProfile from './UserProfile';

export default function TopBanner() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 mb-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Dashboard</h2>
        <div className="flex items-center gap-4">
          <NotificationBell />
          <ThemeToggle />
          <div className="h-6 w-px bg-gray-200 dark:bg-gray-700" />
          <UserProfile />
        </div>
      </div>
    </div>
  );
}