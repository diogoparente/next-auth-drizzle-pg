import { Flex } from "@mantine/core";
import { ThemeButton } from "../../components/buttons/theme";

const Header = () => (
  <Flex justify={"end"} py={"1rem"}>
    <ThemeButton />
  </Flex>
);

export { Header };
