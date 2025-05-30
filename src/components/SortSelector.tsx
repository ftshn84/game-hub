import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
interface Props {
  onSelectSortOrder: (value: string) => void; // Function to handle sort order selection
  sortOrder: string; // Optional prop for the current sort order
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOptions = [
    { label: "Relevance", value: "relevance" },
    { label: "Data added", value: "-added" },
    { label: "Name", value: "name" },
    { label: "Release date", value: "-release" },
    { label: "Popularity", value: "-metacritic" },
    { label: "Average rating", value: "-rating" },
  ];
  const currentSort = sortOptions.find((order) => order.value === sortOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown></BsChevronBarDown>}>
        order by:{currentSort?.label || "Relevance"}
      </MenuButton>

      <MenuList>
        {sortOptions.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
