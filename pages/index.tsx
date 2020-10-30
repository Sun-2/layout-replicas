import Head from "next/head";
import {
  Box,
  Grid,
  Link,
  List,
  ListItem,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Layout } from "../components/Layout";
import styled from "styled-components";

export default function Home() {
  return (
    <Box maxWidth="1200px" margin="0 auto">
      <Box component={Paper} p={3} m={3} pb={1.5}>
        <Typography variant="h4" align="center">
          Layout replicas
        </Typography>
        <ul>
          <li>
            <Typography>Popular websites.</Typography>
          </li>
          <li>
            <Typography>Complex, interesting layouts.</Typography>
          </li>
          <li>
            <Typography>Responsive, if applicable.</Typography>
          </li>
          <li>
            <Typography>Done to hone CSS skills.</Typography>
          </li>
          <li>
            <Typography>Plain HTML & CSS for simplicity & clarity.</Typography>
          </li>
          <li>
            <Typography>
              Layouts only. Aesthetics and interactivity typically not included.
            </Typography>
          </li>
        </ul>
        <Box display="flex" justifyContent="flex-end" flexWrap="wrap">
          <Link
            display="block"
            align="right"
            href="https://github.com/Sun-2/layout-replicas/tree/master/public/layouts/"
          >
            View layouts on GitHub
          </Link>
          <Box ml={3}>
            <Link
              display="block"
              align="right"
              href="https://github.com/Sun-2/layout-replicas"
            >
              View this website on GitHub
            </Link>
          </Box>
        </Box>
      </Box>

      <Box mt={4} ml={4}>
        <SGrid container spacing={4} alignItems="flex-start">
          <Layout
            layoutName="Server managment panel"
            sourceName="Digital Ocean"
            sourceUrl="https://digitalocean.com"
            myShowcaseUrl="/layouts/do"
            sourceIconUrl="https://digitalocean.com/favicon.ico"
            myCodeUrl="#"
            myScreenshotUrl="https://i.imgur.com/OSpvROP.png"
            sourceScreenshotUrl="https://i.imgur.com/AxbLIwe.png"
          />
          <Layout
            layoutName="Homepage"
            sourceName="Facebook"
            sourceUrl="https://facebook.com"
            sourceIconUrl="https://i.imgur.com/u5L5Y5F.png"
            myShowcaseUrl="/layouts/do"
            sourceScreenshotUrl="https://i.imgur.com/AxbLIwe.png"
            myScreenshotUrl="https://i.imgur.com/OSpvROP.png"
            myCodeUrl="#"
          />
        </SGrid>
      </Box>
    </Box>
  );
}

const SGrid = styled(Grid)`
  && {
    align-items: stretch;
    width: 100%;
  }
`;
