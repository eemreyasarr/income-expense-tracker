import { Outlet } from "react-router-dom";
import { SideMenu } from "./SideMenu";
import { TopBar } from "./TopBar";

export function PageLayout() {
    return (
        <div className="page-layout">
            <SideMenu />

            <main className="main-content">
                <TopBar />
                <Outlet />
            </main>
        </div>
    );
}