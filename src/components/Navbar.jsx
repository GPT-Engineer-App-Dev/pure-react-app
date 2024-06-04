import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.700" p={4} color="white">
      <Flex maxW="container.md" mx="auto" align="center">
        <Text fontSize="xl" fontWeight="bold">
          MyApp
        </Text>
        <Spacer />
        <Flex>
          <Link as={RouterLink} to="/" p={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/about" p={2}>
            About
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;