import { Box, Flex, Heading, Text, Link, Image, VStack, Button } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" p={5}>
      <Box maxW="xl" borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
        <VStack spacing={4} align="center">
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTQ2NjcxODd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Image" />
          <Heading as="h1" size="xl">
            John Doe
          </Heading>
          <Text fontSize="lg">Software Engineer | Web Developer</Text>
          <Text textAlign="center" maxW="md">
            Passionate developer with a knack for building responsive and efficient web applications. Experienced in React, Node.js, and cloud technologies.
          </Text>
          <Flex gap={4}>
            <Link href="https://linkedin.com/in/johndoe" isExternal>
              <Button leftIcon={<FaLinkedin />} colorScheme="blue">
                LinkedIn
              </Button>
            </Link>
            <Link href="https://github.com/johndoe" isExternal>
              <Button leftIcon={<FaGithub />} colorScheme="gray">
                GitHub
              </Button>
            </Link>
            <Link href="mailto:johndoe@example.com">
              <Button leftIcon={<FaEnvelope />} colorScheme="red">
                Email
              </Button>
            </Link>
          </Flex>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Index;
