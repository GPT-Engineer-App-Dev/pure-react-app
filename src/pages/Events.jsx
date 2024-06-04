import { Container, Text, VStack, Spinner } from "@chakra-ui/react";
import { useEvents } from "../integrations/supabase/index.js";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Events = () => {
  const { session } = useSupabaseAuth();
  const navigate = useNavigate();
  const { data: events, isLoading, isError } = useEvents();

  useEffect(() => {
    if (!session) {
      navigate("/login");
    }
  }, [session, navigate]);

  if (!session) {
    return null;
  }

  if (isLoading) {
    return (
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Spinner size="xl" />
      </Container>
    );
  }

  if (isError) {
    return (
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Text fontSize="2xl">Error loading events</Text>
      </Container>
    );
  }

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Events</Text>
        {events.map(event => (
          <Text key={event.id}>{event.name}</Text>
        ))}
      </VStack>
    </Container>
  );
};

export default Events;