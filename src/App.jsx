import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProtectedRoutes from "./utils/ProtectedRoutes.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* route no need to be authenticated */}
                <Route path="/login" element={<p>login</p>}/>

                {/* route need to be authenticated */}
                <Route element={<ProtectedRoutes/>}>
                    <Route path="/" exact element={<p>dashboard</p>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App