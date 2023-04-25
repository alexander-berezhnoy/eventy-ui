import React from "react";
import "./App.css";
import { Flex } from "@chakra-ui/react";
import Counter from "./components/Counter";
import EventsTable from "./components/EventsTable";
import { useAppSelector } from "./redux/hooks";
import { selectIgnored, selectReported } from "./redux/reducers/eventSlice";
import { Event } from "./redux/reducers/eventSlice";

function App() {
  const ignoredCount = useAppSelector(selectIgnored);
  const reportedCount = useAppSelector(selectReported);

  const eventsMock = [
    { id: "111", name: "eventC", timestamp: 1014, severity: "high" },
    { id: "112", name: "eventA", timestamp: 1045, severity: "medium" },
    { id: "113", name: "eventB", timestamp: 1001, severity: "low" },
  ] as Event[];

  return (
    <div className="App">
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Counter name="Ignored" count={ignoredCount} />
        <Counter name="Reported" count={reportedCount} />
      </Flex>
      <EventsTable events={eventsMock} />
    </div>
  );
}

export default App;
