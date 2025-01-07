import { ThemeProvider } from './components/ThemeProvider';
import Sidebar from './components/Sidebar';
import TopBanner from './components/TopBanner';
import WelcomeBanner from './components/WelcomeBanner';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="max-w-[1600px] mx-auto flex">
          <Sidebar />
          <main className="flex-1 p-8">
            <TopBanner />
            <WelcomeBanner />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;