import { Box, Text } from "@chakra-ui/react";
import React from "react";

type CounterProps = {
  name: string;
  count: number;
};

const Counter: React.FC<CounterProps> = ({ name, count }) => {
  return (
    <Box bg="gray.200" p={2} m={4} borderRadius="md">
      <Text fontSize="xl" fontWeight="bold">
        {name}:{count}
      </Text>
    </Box>
  );
};

export default Counter;
