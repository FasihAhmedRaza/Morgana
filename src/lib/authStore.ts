import { create } from "zustand";
import { persist } from "zustand/middleware";

type LoginResponse = {
  authentication: any;
  user: any;
};

type StoreState = {
  userData: null | any;
  accessToken: null | string;
  refreshToken: null | string;
  isAuth: boolean;
};

type StoreAction = {
  setUserAuthentication: (data: LoginResponse) => void;
  removeUserAuthentication: () => void;
  updateUserData: (data: any) => void;
};

const initialState: StoreState = {
  isAuth: false,
  userData: null,
  accessToken: null,
  refreshToken: null,
};

const useAuthStore = create<StoreState & StoreAction>()(
  persist(
    (set) => ({
      ...initialState,
      setUserAuthentication: (payload: LoginResponse) =>
        set(() => ({
          isAuth: true,
          accessToken: payload?.authentication?.accessToken,
          refreshToken: payload?.authentication?.refreshToken,
          userData: payload.user,
        })),
      removeUserAuthentication: () =>
        set(() => ({
          ...initialState,
        })),
      updateUserData: (payload: any) => set(() => ({ userData: payload })),
    }),
    {
      name: "PERSIST_STORE",
      partialize: ({
        isAuth,
        accessToken,
        refreshToken,
        userData,
      }) => ({
        isAuth,
        userData,
        accessToken,
        refreshToken,
      }),
    }
  )
);

export default useAuthStore;
