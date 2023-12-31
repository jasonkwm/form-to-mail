import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";

import { CssBaseline } from "@mui/material";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <CssBaseline />
            <Component {...pageProps} />
        </>
    );
    return;
}
