import { LeftNavBar1 } from "./LeftNavBar";
import { MainPage } from "./MainPage";

function Page1() {
    return (
        <div className="flex h-screen w-full overflow-hidden">
            <LeftNavBar1 />
            <MainPage />
        </div>
    );
}

export default Page1