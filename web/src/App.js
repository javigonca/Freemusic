import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import TracksList from "./components/tracks/tracks-list/TracksList";
import UsersForm from "./components/users/users-form/UsersForm";
import RegisterPage from "./pages/RegisterPage";
import AlbumsList from "./components/albums/album-list/AlbumsList";
import AlbumsPage from "./pages/AlbumsPage";
import TracksPage from "./pages/TracksPage";
import LoginPage from "./pages/LoginPage";
import AuthStore from "./contexts/AuthStore";



function App() {
  return (
    <>

      <AuthStore> 
        <Navbar />      
        <Routes>
          <Route path="/users" element={<RegisterPage/>} />
          <Route path="/albums?" element={<AlbumsPage/>} />
          <Route path="/tracks" element={<TracksPage/>} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
      </AuthStore>
      
    
      
    </>
  );
}

export default App;
