//import from libs below
import PersonIcon from '@material-ui/icons/Person'

//import Components below
import TopBar from '../../components/topbar/TopBar'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'

//Import Styles below
import './Home.css';

export default function Home() {
    return (
        <div>
            {/* <PersonIcon/> */}
            <TopBar />
            <div className="homeContainer">
                <Sidebar />
                <Feed/>
                <Rightbar />
                
            </div>

            {/* <p>This is home</p> */}
        </div>
    )
}