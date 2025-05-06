import {
  Button,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  usePopover,
} from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms(); // Fallback to an empty array if usePlatforms returns undefined
  if (error) return null; // Handle error state appropriately
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown></BsChevronBarDown>}>
        Platforms
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
