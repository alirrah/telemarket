import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProtectedRoutes from "./utils/ProtectedRoutes.jsx";
import Login from "./containers/Login/";
import "./App.css";
import {ConfigProvider} from "antd";

const App = () => {
    return (
        <ConfigProvider theme={{
            token: {
                fontFamily: "Vazir"
            }
        }}>
            <BrowserRouter>
                <Routes>
                    {/* route no need to be authenticated */}
                    <Route path="/login" element={<Login/>}/>

                    {/* route need to be authenticated */}
                    <Route element={<ProtectedRoutes/>}>
                        <Route path="/" exact element={<p>dashboard</p>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ConfigProvider>
    );
}

export default App