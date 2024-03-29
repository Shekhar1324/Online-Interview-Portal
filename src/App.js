import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './components/Home';
// import EditorPage from './pages/EditorPage';
import AppTest from "./components/AppTest";

function App() {
    return (
        <>
            <div>
                <Toaster
                    position="top-right"
                    toastOptions={{
                        success: {
                            theme: {
                                primary: '#4aed88',
                            },
                        },
                    }}
                ></Toaster>
            </div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route
                        path="/:roomId"
                        element={<AppTest/>}
                    ></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
