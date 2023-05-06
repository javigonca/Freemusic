import { Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import AlbumsPage from "./pages/AlbumsPage";
import TracksPage from "./pages/TracksPage";
import LoginPage from "./pages/LoginPage";
import AuthStore from "./contexts/AuthStore";
import AlbumPage from "./pages/AlbumPage";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import CreateAlbumPage from "./pages/CreateAlbumPage";

function App() {
  return (
    <>
      <AuthStore>             
        <Routes>          
          <Route path="/users" element={<RegisterPage />} />
          <Route path="/" element={<HomePage/>} />
          <Route path="/albums" element={<AlbumsPage />} />
          <Route path="/tracks" element={<TracksPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/users/:userId" element={<UserPage/>} />
          <Route path="/albums/:albumId" element={<AlbumPage/>} />
          <Route path="/create-album" element={<CreateAlbumPage/>}/>
        </Routes>        
      </AuthStore>
    </>
  );
}

export default App;
