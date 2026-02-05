import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import AboutMe from "../components/AboutMe"
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <Header/>
            <ProfileCard/>
            <AboutMe/>
            <Footer/>
        </>
    );
}
