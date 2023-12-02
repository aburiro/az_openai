import React from "react";
import { useTheme } from './ThemeContext';
import image_1 from '../assets/images/Black And White Globe Y2k Streetwear Logo.png';
import image_2 from '../assets/images/download (1).png';

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  const handleClick = () => {
    // Toggle between dark and light mode
    toggleDarkMode();
  };

  return (
    <header style={{ backgroundColor: isDarkMode ? '#303033' : '#FFFFFF', padding: '20px', 
    textAlign: 'center', color: isDarkMode ? '#FFFFFF' : '#000000' ,

    position: "absolute",
    width: "1440px",
    height: "130px",
    left: "0px",
    top: "0px",
    
    
    }}>
      {/* Your logo */}
      <img
        src={image_1} // Replace with the actual path to your logo image
        alt="Logo"
        style={{ /* Black And White Globe Y2k Streetwear Logo 1 */

        position: 'absolute',
        width: '207px',
        height: '130px',
        left: '0px',
        top: '0px',
        
    
         }}
      />

      {/* Image with onClick event */}
      <img
        src={image_2} // Replace with the actual path to your image
        alt="Clickable Image"
        style={{ cursor: 'pointer', marginTop: '10px' ,

        position: "absolute",
        width: '66px',
        height: '65px',
        left: '1310px',
        top: '65px',
        
        
        }}
        onClick={handleClick}
      />

      
    </header>
  );
};

export default Header;
