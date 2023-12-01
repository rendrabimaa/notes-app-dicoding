import React from "react";
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import ReactModal from "react-modal";
import LoginPage from "./pages/auth/Login";
import MainLayout from "./Layouts/MainLayout";
import Notes from "./pages/Notes";
import ArchiveNotes from "./pages/ArchiveNotes";
import DetailNote from "./pages/DetailNote";
import NotFound from "./pages/404";
import GlobalStateProvider from "../context/GlobalStateProvider";
import AuthLayout from "./Layouts/AuthLayout";
import RegisterPage from "./pages/auth/Register";
import ProtectedRoute from "./Fragments/ProtectedRoute";

ReactModal.setAppElement('#root');

const App = () => {
    return (
        <GlobalStateProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<ProtectedRoute />}>
                        <Route path="" element={<MainLayout />}>
                            <Route index path="" exact element={<Notes />} />
                            <Route path="archive" element={<ArchiveNotes />} />
                        </Route>
                    </Route>
                    <Route path="auth" element={<AuthLayout />}>
                        <Route path="login" element={<LoginPage />} />
                        <Route path="register" element={<RegisterPage />} />
                    </Route>
                    <Route path="/note/:id" element={<DetailNote />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </GlobalStateProvider>
    )
}

export default App;