import { createContext, ReactNode, useState } from "react";

interface State {
  account?: string;
  phone?: string;
  email?: string;
  token?: string;
  selectedMenu: string;
  selectedMenuName: string;
  selectedChannelType?: string;
  selectedChannelName: string;
  selectedChannel: string;
  menus: MenuItem[]
}

interface MenuItem {
  id: string
  path: string
  name: string
  children: MenuItem[]
}

interface contextType {
  userState: State;
  updateUserState: (newState: Partial<State>) => void;
}

type ProviderComponent = {
  children: ReactNode
}

export const UserContext = createContext<contextType | undefined>(undefined);

export const UserProvider = ({children}: ProviderComponent) => {
  const [contextState, setContextState] = useState<State>({
    selectedMenu: "",
    selectedMenuName: "",
    selectedChannel: "",
    selectedChannelName: "",
    menus: []
  });

  // 更新数据
  const updateState = (updates: Partial<State>) => {
    setContextState((prevState) => ({
      ...prevState,
      ...updates,
    }));
  };

  return (
    <UserContext.Provider
      value={{ userState: contextState, updateUserState: updateState }}
    >
      {children}
    </UserContext.Provider>
  );
};
