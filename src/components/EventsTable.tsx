import React, { useState, useMemo } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
// import { selectEvents } from "../redux/reducers/eventSlice";
import EventRow from "./EventRow";
import { Event } from "../redux/reducers/eventSlice";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
} from "@chakra-ui/react";

type EventsTableProps = {
  events: Event[];
};

type SortEventHeader = "id" | "name" | "timestamp";

const EventsTable: React.FC<EventsTableProps> = ({ events }) => {
  const [sortColumn, setSortColumn] = useState<SortEventHeader>("id");

  const dispatch = useAppDispatch();

  const handleSort = (column: SortEventHeader) => {
    if (column && column !== sortColumn) setSortColumn(column);
  };

  const sortedEvents = useMemo(() => {
    if (!sortColumn) return events;
    return [...events].sort((a, b) => {
      if (a[sortColumn] < b[sortColumn]) return -1;
      if (a[sortColumn] > b[sortColumn]) return 1;
      return 0;
    });
  }, [sortColumn, events]);

  return (
    <Box maxWidth="100%" width="100%" overflowX="auto">
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th onClick={() => handleSort("id")} cursor="pointer">
                ID
              </Th>
              <Th onClick={() => handleSort("name")} cursor="pointer">
                Name
              </Th>
              <Th
                isNumeric
                onClick={() => handleSort("timestamp")}
                cursor="pointer"
              >
                Timestamp, sec
              </Th>
              <Th>Severity</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {sortedEvents?.map((event) => (
              <EventRow event={event} key={event?.id} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default EventsTable;
