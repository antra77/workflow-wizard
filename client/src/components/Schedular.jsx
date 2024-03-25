import React from "react";
import {
  Agenda,
  Day,
  DragAndDrop,
  Inject,
  Month,
  Resize,
  ScheduleComponent,
  Week,
  WorkWeek,
} from "@syncfusion/ej2-react-schedule";

const Schedular = () => {
  const scheduleData = [
    {
      Id: 1,
      Subject: "Explosion of Betelgeuse Star",
      Location: "Space Center USA",
      StartTime: "2024-03-24T04:00:00.000Z",
      EndTime: "2024-03-24T05:30:00.000Z",
      CategoryColor: "#1aaa55",
    },
    {
      Id: 2,
      Subject: "Thule Air Crash Report",
      Location: "Newyork City",
      StartTime: "2024-03-25T06:30:00.000Z",
      EndTime: "2024-03-25T08:30:00.000Z",
      CategoryColor: "#357cd2",
    },
    {
      Id: 3,
      Subject: "Blue Moon Eclipse",
      Location: "Space Center USA",
      StartTime: "2024-03-26T04:00:00.000Z",
      EndTime: "2024-03-26T05:30:00.000Z",
      CategoryColor: "#7fa900",
    },
    {
      Id: 4,
      Subject: "Meteor Showers in 2021",
      Location: "Space Center USA",
      StartTime: "2024-03-27T07:30:00.000Z",
      EndTime: "2024-03-27T09:00:00.000Z",
      CategoryColor: "#ea7a57",
    },
    {
      Id: 5,
      Subject: "Milky Way as Melting pot",
      Location: "Space Center USA",
      StartTime: "2024-03-28T06:30:00.000Z",
      EndTime: "2024-03-28T08:30:00.000Z",
      CategoryColor: "#00bdae",
    },
    {
      Id: 6,
      Subject: "Mysteries of Bermuda Triangle",
      Location: "Bermuda",
      StartTime: "2024-03-28T04:00:00.000Z",
      EndTime: "2024-03-28T05:30:00.000Z",
      CategoryColor: "#f57f17",
    },
    {
      Id: 7,
      Subject: "Glaciers and Snowflakes",
      Location: "Himalayas",
      StartTime: "2024-03-29T05:30:00.000Z",
      EndTime: "2024-03-29T07:00:00.000Z",
      CategoryColor: "#1aaa55",
    },
    {
      Id: 8,
      Subject: "Life on Mars",
      Location: "Space Center USA",
      StartTime: "2024-03-30T03:30:00.000Z",
      EndTime: "2024-03-30T04:30:00.000Z",
      CategoryColor: "#357cd2",
    },
    {
      Id: 9,
      Subject: "Alien Civilization",
      Location: "Space Center USA",
      StartTime: "2024-03-01T05:30:00.000Z",
      EndTime: "2024-03-01T07:30:00.000Z",
      CategoryColor: "#7fa900",
    },
    {
      Id: 10,
      Subject: "Wildlife Galleries",
      Location: "Africa",
      StartTime: "2024-03-03T05:30:00.000Z",
      EndTime: "2024-03-03T07:30:00.000Z",
      CategoryColor: "#ea7a57",
    },
    {
      Id: 11,
      Subject: "Best Photography 2021",
      Location: "London",
      StartTime: "2024-03-04T04:00:00.000Z",
      EndTime: "2024-03-04T05:30:00.000Z",
      CategoryColor: "#00bdae",
    },
    {
      Id: 12,
      Subject: "Smarter Puppies",
      Location: "Sweden",
      StartTime: "2024-03-05T04:30:00.000Z",
      EndTime: "2024-03-05T06:00:00.000Z",
      CategoryColor: "#f57f17",
    },
    {
      Id: 13,
      Subject: "Myths of Andromeda Galaxy",
      Location: "Space Center USA",
      StartTime: "2024-03-06T05:00:00.000Z",
      EndTime: "2024-03-06T07:00:00.000Z",
      CategoryColor: "#1aaa55",
    },
    {
      Id: 14,
      Subject: "Aliens vs Humans",
      Location: "Research Center of USA",
      StartTime: "2024-03-07T04:30:00.000Z",
      EndTime: "2024-03-07T06:00:00.000Z",
      CategoryColor: "#357cd2",
    },
    {
      Id: 15,
      Subject: "Facts of Humming Birds",
      Location: "California",
      StartTime: "2024-03-08T04:00:00.000Z",
      EndTime: "2024-03-08T05:30:00.000Z",
      CategoryColor: "#7fa900",
    },
    {
      Id: 16,
      Subject: "Sky Gazers",
      Location: "Alaska",
      StartTime: "2024-03-09T05:30:00.000Z",
      EndTime: "2024-03-09T07:30:00.000Z",
      CategoryColor: "#ea7a57",
    },
    {
      Id: 17,
      Subject: "The Cycle of Seasons",
      Location: "Research Center of USA",
      StartTime: "2024-03-10T00:00:00.000Z",
      EndTime: "2024-03-10T02:00:00.000Z",
      CategoryColor: "#00bdae",
    },
    {
      Id: 18,
      Subject: "Space Galaxies and Planets",
      Location: "Space Center USA",
      StartTime: "2024-03-11T11:30:00.000Z",
      EndTime: "2024-03-11T13:00:00.000Z",
      CategoryColor: "#f57f17",
    },
    {
      Id: 19,
      Subject: "Lifecycle of Bumblebee",
      Location: "San Fransisco",
      StartTime: "2024-03-14T00:30:00.000Z",
      EndTime: "2024-03-14T02:00:00.000Z",
      CategoryColor: "#7fa900",
    },
    {
      Id: 20,
      Subject: "Alien Civilization",
      Location: "Space CenterUSA",
      StartTime: "2024-03-14T10:30:00.000Z",
      EndTime: "2024-03-14T12:30:00.000Z",
      CategoryColor: "#ea7a57",
    },
    {
      Id: 21,
      Subject: "Alien Civilization",
      Location: "Space Center USA",
      StartTime: "2024-03-10T08:30:00.000Z",
      EndTime: "2024-03-10T10:30:00.000Z",
      CategoryColor: "#ea7a57",
    },
    {
      Id: 22,
      Subject: "The Cycle of Seasons",
      Location: "Research Center of USA",
      StartTime: "2024-03-12T09:00:00.000Z",
      EndTime: "2024-03-12T10:30:00.000Z",
      CategoryColor: "#00bdae",
    },
    {
      Id: 23,
      Subject: "Sky Gazers",
      Location: "Greenland",
      StartTime: "2024-03-15T09:00:00.000Z",
      EndTime: "2024-03-15T10:30:00.000Z",
      CategoryColor: "#ea7a57",
    },
    {
      Id: 24,
      Subject: "Facts of Humming Birds",
      Location: "California",
      StartTime: "2024-03-16T07:00:00.000Z",
      EndTime: "2024-03-16T09:00:00.000Z",
      CategoryColor: "#7fa900",
    },
  ];

  return (
    <div className="bg-zinc-50 m-5 p-8 rounded-xl drop-shadow-md">
      <ScheduleComponent
        height="650px"
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2024, 2, 10)}
      >
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Schedular;
