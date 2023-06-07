import * as React from "react";
import Container from "@mui/material/Container";
import LineAndPie from "./LineAndPie";

interface IDashboardProps {}

const Dashboard: React.FunctionComponent<IDashboardProps> = (props) => {
  return (
    <>
      <h2>Dashboard</h2>
      <Container sx={{ alignItems: "center" }}>
        <LineAndPie />
      </Container>
    </>
  );
};

export default Dashboard;
