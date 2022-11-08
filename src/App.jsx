import {
    BrowserRouter,
    Navigate,
    Routes,
    Route,
} from "react-router-dom";
import './index.scss';
import Purchases from "./components/pages/purchases";

export function App() {
    return <BrowserRouter>
        <Routes>
            <Route path="purchases" element={<Purchases />} />
            <Route path="*" element={<Navigate to="/purchases" replace />} />
        </Routes>
    </BrowserRouter>;
}