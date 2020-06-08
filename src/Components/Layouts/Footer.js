import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";

export default ({ muscles }) => (
  <Paper>
    <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
      <Tab label="All" />
      {muscles.map(group => (
        <Tab label={group} />
      ))}
    </Tabs>
  </Paper>
);
