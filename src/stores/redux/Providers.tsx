"use client";

import { LocaleProvider } from "@/localisations/locale-provider";
import store from "../index";
import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>
        <LocaleProvider>
            {children}
        </LocaleProvider>
    </Provider>;
}
