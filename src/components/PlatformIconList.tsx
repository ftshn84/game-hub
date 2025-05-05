import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa"; // Import the FaWindows icon from react-icons
import { SiNintendo } from "react-icons/si"; // Import the SiNintendo icon from react-icons
import { MdPhoneIphone } from "react-icons/md"; // Import the MdPhoneIphon icon from react-icons
import { GiGamepad } from "react-icons/gi"; // Import the GiGamepad icon from react-icons
import { BsGlobe } from "react-icons/bs"; // Import the BsGlobe icon from react-icons

// Import the FaWindows icon from react-icons
import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react"; // Import the T component from Chakra UI
import { IconType } from "react-icons/lib";

interface props {
  platforms: Platform[]; // Define any props that PlatformIconList might need here
}
const PlatformIconList = ({ platforms }: props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows, // Use the FaWindows icon for PC
    playstation: FaPlaystation, // Use the FaPlaystation icon for PlayStation
    xbox: FaXbox, // Use the FaXbox icon for Xbox
    nintendo: SiNintendo, // Use the SiNintendo icon for Nintendo
    ios: FaApple, // Use the FaApple icon for iOS
    android: FaAndroid, // Use the FaAndroid icon for Android
    linux: FaLinux, // Use the FaLinux icon for Linux
    web: BsGlobe, // Use the BsGlobe icon for Web
    gamepad: GiGamepad, // Use the GiGamepad icon for Gamepad
  };
  return (
    <HStack spacing={1} marginY={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
