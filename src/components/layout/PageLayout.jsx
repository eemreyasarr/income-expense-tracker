import { SideMenu } from "./SideMenu";
import { TopBar } from "./TopBar";

export function PageLayout({ children }) {
    return (
        <div className="page-layout">
            <SideMenu />

            <main className="main-content">
                <TopBar />
                {children}
            </main>
        </div>
    );
}