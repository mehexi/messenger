import { AppSidebar } from "./components/AppSidebar";
import { SidebarProvider } from "./components/ui/sidebar";
import { ThemeProvider } from "@/components/ThemeProvider";
import './index.css'

function App() {
  return (
    <>
      <SidebarProvider>
        <ThemeProvider defaultTheme='dark'>
          <AppSidebar/>
          <main>
            <h1>App</h1>
            </main>
        </ThemeProvider>
      </SidebarProvider>
    </>
  );
}

export default App;
