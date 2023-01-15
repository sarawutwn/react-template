
import axios from "axios";
import { useRef } from 'react';
import LoadingModal from './utils/LoadingModal';
import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material';
import Theme from "./utils/Theme";
import Routes from './routes';
import SnackbarRef from './utils/SnackbarRef'
import { hostname } from "./hostname";


function App() {
    const loadingModalRef = useRef(null);
    const snackbarRef = useRef(null);

    axios.interceptors.request.use(
        async function (config) {
            let token = await localStorage.getItem("TOKEN")
            loadingModalRef.current.setOpen(true)
            if(token !== null) {
                config.headers = { Authorization: "Bearer " + localStorage.getItem("TOKEN") }
                return config;
            }
            return config;
        },
        function (error) {
            loadingModalRef.current.setOpen(false)
            snackbarRef.current.setSnackValue({ status: true, type: 'error', message: error.toString() })
            return Promise.reject(error);
        }
    );

    axios.interceptors.response.use(
        function (response) {
            loadingModalRef.current.setOpen(false)
            return response;
        },
        async function (error) {
            const originalConfig = error.config;
            if(originalConfig.url !== "/auth/signin" && error.response) {
                if (error.response.status === 401 && error.response.data.status === "UnAutholization") {
                    try {
                      const { data } = await axios.post(`${hostname}/api/auth/refresh-token`, {
                        refresh_token: localStorage.getItem('REFRESH'),
                      });
                      localStorage.setItem("TOKEN", data.token);
                      return axios.request(error.config)
                    } catch (_error) {
                      return Promise.reject(_error);
                    }
                  }
            }
            if (error.response.data.status === "UnAutholization") {
                loadingModalRef.current.setOpen(false)
                alert("Session timeut!")
                localStorage.clear();
                window.location.href = "/";
            }
        }
    );

    return (
        <>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={Theme}>
                    <Routes />
                    <LoadingModal ref={loadingModalRef} />
                    <SnackbarRef ref={snackbarRef} />
                </ThemeProvider>
            </StyledEngineProvider>
        </>
    );
}

export default App;
