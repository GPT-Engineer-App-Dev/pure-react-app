import { Container, Text, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">About Us</Text>
        <Text>This is the about page.</Text>
      </VStack>
    </Container>
  );
};

export default About;