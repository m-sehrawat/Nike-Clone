import { useSelector } from 'react-redux';
import './App.css';
import { Router } from './routes/Router';

function App() {
    const modalOpen = useSelector((state) => state.pathReducer.modalOpen);

    return (
        <div className={modalOpen ? "blurBackground" : undefined} >
            <Router />
        </div>
    );
}

export default App;
