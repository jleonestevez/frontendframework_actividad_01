import './App.css';
import Header from "./components/Header";
import EpisodesList from "./components/EpisodesList";
import SearchBar from "./components/SearchBar";

function App() {
    return (
        <div className="App">
            <Header/>
            <SearchBar/>
            <EpisodesList/>
        </div>
    );
}

export default App;
