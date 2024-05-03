import { Outlet } from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            <h1>Navbar</h1>
            <Outlet/>
            <h1>Footer</h1>
        </div>
    );
};

export default MainPage;