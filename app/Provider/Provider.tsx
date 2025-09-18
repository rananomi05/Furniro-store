"use client";
import { Provider } from "react-redux";
import { store } from "../../store/Store";
import { SessionProvider } from 'next-auth/react';
interface Props {
    children: React.ReactNode;
}
export default function Providers({ children }: Props) {
    return <Provider store={store}>
        <SessionProvider>
        {children}
        </SessionProvider>
    </Provider>;
}