import { createContext } from "react";
import { UserData } from "../types/UserData";

interface RegisterContext {
    userData: UserData;
    setUserData: React.Dispatch<React.SetStateAction<UserData>>;
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
};

export const RegisterContext = createContext<RegisterContext>({} as RegisterContext);
