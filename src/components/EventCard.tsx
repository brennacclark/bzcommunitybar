// EventCard.tsx
import { FunctionComponent } from "react";
import "../assets/EventCard.css";

// Define the type for the props
type EventCardProps = {
  day: string;
  title: string;
  description: string;
};

const EventCard: FunctionComponent<EventCardProps> = ({
  day,
  title,
  description,
}) => {
  return (
    <div className="col-md col-12">
      <div className="card event-card h-100">
        <div className="card-header event-header">{day}</div>
        <div className="card-body event-body equal-content">
          <h5 className="card-title event-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
