import "../index.css"
import "../style.css"
import {LanguageProvider} from "../use-language";


export default function App({Component, pageProps}) {
    return <LanguageProvider>
        <Component {...pageProps} />
    </LanguageProvider>
}
