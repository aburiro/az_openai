import HeroSection from "./HeroSection";
import Projects from "./Projects";
import Reviews from "./Reviews";
import ContactUs from "./ContactUs";
import SocialMediaProfiles from "./SocialMediaProfiles";
import { ThemeProvider } from "./ThemeContext";

function WelcomePage() {
    return (
        <> 
            <ThemeProvider> 
            <HeroSection />
            <SocialMediaProfiles />
            <Projects />
            <Reviews />
            <ContactUs />
            </ThemeProvider>
        </>
    );
}

export default WelcomePage;
