import { Routes, Route } from "react-router-dom";

import "./App.css";
import ArticleDetailPage from "./pages/home/ArticleDetail/ArticleDetailPage";
import HomePage from "./pages/home/HomePage";

function App() {
    return (
        <div className="App font-opensans">
            <Routes>
                <Route index path="/" element={<HomePage />} />
                <Route index path="/" element={<ArticleDetailPage />} />
            </Routes>
        </div>
    )
}
