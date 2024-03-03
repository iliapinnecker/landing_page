import MainViewIntro from "./mainview-assets/MainViewIntro"
import MainViewUserFriendly from "./mainview-assets/MainViewUserFriendly"
import MainViewAdaptability from "./mainview-assets/MainViewAdaptability"
import MainViewTimeSaving from "./mainview-assets/MainViewTimeSaving"
import MainViewUpdatability from "./mainview-assets/MainViewUpdatability"
import MainViewSectionSeparatorLeft from "./mainview-assets/MainViewSectionSeparatorLeft"
import MainViewSectionSeparatorRight from "./mainview-assets/MainViewSectionSeparatorRight"

export default function MainView() {
    return (
        <main className="main-section">
            <div className="main-section-container">
                <MainViewIntro />
                <MainViewUserFriendly />
                <MainViewSectionSeparatorLeft />
                <MainViewAdaptability />
                <MainViewSectionSeparatorRight />
                <MainViewTimeSaving />
                <MainViewSectionSeparatorLeft />
                <MainViewUpdatability />
            </div>
        </main>
    )
}