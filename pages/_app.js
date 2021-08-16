import '../styles/base.css'
import MainLayout from "../layout/mainLayout";

function MyApp({Component, pageProps}) {

    return <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
}

export default MyApp
