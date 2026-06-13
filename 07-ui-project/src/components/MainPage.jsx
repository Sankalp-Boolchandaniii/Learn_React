import UpperNavBarMainPage from "./UpperNavbarMainPage";

export function MainPage() {
    return (
        <div className="w-4/5 h-full bg-gray-100">
            <div className="h-1/2 bg-black text-white">
                <UpperNavBarMainPage />
            </div>
            <div className="h-1/2 bg-amber-700">
                Cards
            </div>
        </div>
    );
}