import Box from "@mui/material/Box";
import "./App.css";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChannelDetail, SearchFeed, VideoDetail } from "./components";
import VideoDetails from "./components/VideoDetails";


function App() {
  return (
    <BrowserRouter>
    <Box sx={{ backgroundColor: '#white' }}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetails />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
  );
}

export default App;
