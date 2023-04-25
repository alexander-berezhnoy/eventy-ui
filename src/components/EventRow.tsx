import React from "react";
import { Tr, Td, Button, Flex } from "@chakra-ui/react";
import { Event } from "../redux/reducers/eventSlice";

type EventRowProps = {
  event: Event;
};

const EventRow: React.FC<EventRowProps> = ({ event }) => {
  const { id, name, timestamp, severity } = event;

  const handleIgnore = () => {
    console.log("Ignore event", id);
  };

  const handleReport = () => {
    console.log("Report event ", id);
  };

  return (
    <Tr>
      <Td>{id}</Td>
      <Td>{name}</Td>
      <Td isNumeric>{timestamp}</Td>
      <Td>{severity}</Td>
      <Td>
        <Flex align="center" gap="2" p={2}>
          <Button
            colorScheme="red"
            size="sm"
            variant="outline"
            onClick={handleIgnore}
          >
            Ignore
          </Button>
          <Button colorScheme="red" size="sm" onClick={handleReport}>
            Report
          </Button>
        </Flex>
      </Td>
    </Tr>
  );
};

export default EventRow;
