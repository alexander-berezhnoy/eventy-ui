import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
// import axios from "axios";

export interface Event {
  id: string;
  timestamp: number;
  name: string;
  severity: "low" | "medium" | "high";
}

export interface EventsState {
  ignored: number;
  reported: number;
  events: Event[];
}

const initialState = {
  ignored: 0,
  reported: 0,
  events: [],
} as EventsState;

export const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<EventsState>) => {
      state.ignored = action.payload.ignored;
      state.reported = action.payload.ignored;
      state.events = action.payload.events;
    },
    addEvent: (state, action: PayloadAction<Event>) => {
      state.events.push(action.payload);
    },
    ignoreEvent: (state, action: PayloadAction<string>) => {
      const eventId = action.payload;
      state.events = state.events.filter((event) => event.id !== eventId);
      state.ignored++;
    },
    reportEvent: (state, action: PayloadAction<string>) => {
      const eventId = action.payload;
      state.events = state.events.filter((event) => event.id !== eventId);
      state.reported++;
    },
  },
});

export const { setEvents, addEvent, ignoreEvent, reportEvent } =
  eventSlice.actions;

export default eventSlice.reducer;

export const selectIgnored = (state: RootState) => state.events.ignored;
export const selectReported = (state: RootState) => state.events.reported;
export const selectEvents = (state: RootState) => state.events.events;

// Async actions using Redux-Thunk
// export const fetchEvents = () => async (dispatch) => {
//   try {
//     const response = await axios.get("http://localhost:8080/events");
//     dispatch(setEvents(response.data));
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const createEvent =
//   (name: string, severity: "low" | "medium" | "high") => async (dispatch) => {
//     try {
//       const response = await axios.post("http://localhost:8080/events", {
//         name,
//         severity,
//       });
//       dispatch(addEvent(response.data));
//     } catch (error) {
//       console.error(error);
//     }
//   };

// export const ignoreEvent = (eventId: string) => async (dispatch) => {
//   try {
//     await axios.post("http://localhost:8080/events/ignore", { eventId });
//     dispatch(ignoreEvent(eventId));
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const reportEvent = (eventId: string) => async (dispatch) => {
//   try {
//     await axios.post("http://localhost:8080/events/report", { eventId });
//     dispatch(reportEvent(eventId));
//   } catch (error) {
//     console.error(error);
//   }
// };
