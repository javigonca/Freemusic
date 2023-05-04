import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import RegisterPage from "./pages/RegisterPage";
import AlbumsPage from "./pages/AlbumsPage";
import TracksPage from "./pages/TracksPage";
import LoginPage from "./pages/LoginPage";
import AuthStore from "./contexts/AuthStore";
import AlbumPage from "./pages/AlbumPage";
import AlbumDetail from "./components/albums/album-detail/AlbumDetail";

function App() {
  return (
    <>
      <AuthStore>
        <Navbar />      
        <Routes>
          <Route path="/users" element={<RegisterPage />} />
          <Route path="/" element={<AlbumsPage />} />
          <Route path="/tracks" element={<TracksPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/albums/:albumId" element={<AlbumPage/>} />
        </Routes>
      </AuthStore>
    </>
  );
}

export default App;
