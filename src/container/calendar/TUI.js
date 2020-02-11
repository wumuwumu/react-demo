import React, { PureComponent } from "react";
import Calendar from "@toast-ui/react-calendar";
import "tui-calendar/dist/tui-calendar.css";

// If you use the default popups, use this.
// import "tui-date-picker/dist/tui-date-picker.css";
// import "tui-time-picker/dist/tui-time-picker.css";

export default class TUI extends PureComponent {
  render() {
    return (
      <div>
        <Calendar usageStatistics={false} />
      </div>
    );
  }
}
