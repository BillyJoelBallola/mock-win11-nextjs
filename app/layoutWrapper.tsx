import { UserContextProvider } from "@/app/context/UserContext";
import { TaskbarContextProvider } from "./context/TaskbarContext";
import { DesktopContextProvider } from "./context/DesktopContext";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserContextProvider>
      <TaskbarContextProvider>
        <DesktopContextProvider>{children}</DesktopContextProvider>
      </TaskbarContextProvider>
    </UserContextProvider>
  );
};

export default LayoutWrapper;
