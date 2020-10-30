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
import { Layout, LayoutProps } from "../components/Layout";
import styled from "styled-components";
import { rootResolve } from "../utils/rootResolve";
import path from "path";
import { promises as fsp } from "fs";

export type HomeProps = {
  layouts: LayoutProps[];
};

export default function Home(props: HomeProps) {
  console.log(props);
  return (
    <Box maxWidth="1200px" margin="0 auto">
      <Box component={Paper} p={1} m={1} pb={1.5} pt={3}>
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

      <Box p={1}>
        <Grid container spacing={3} alignItems="flex-start">
          {props.layouts.map((layoutProps) => (
            <Layout {...layoutProps} />
          ))}

        </Grid>
      </Box>
    </Box>
  );
}

export async function getStaticProps(): Promise<{ props: HomeProps }> {
  const layoutsDir = rootResolve("public", "layouts");
  const layoutNames = await fsp.readdir(layoutsDir);

  const metas = (
    await Promise.all(
      layoutNames.map((name) =>
        fsp.readFile(path.resolve(layoutsDir, name, "meta.json"), {
          encoding: "utf8",
        })
      )
    )
  ).map((metaString) => JSON.parse(metaString));

  const fullMetas = metas.map((meta, i) => {
    return {
      ...meta,
      myCodeUrl: `/layouts/${layoutNames[i]}/index.html`,
      myShowcaseUrl: `https://github.com/Sun-2/layout-replicas/blob/master/public/layouts/${layoutNames[i]}/index.html`,
    };
  });

  return {
    props: {
      layouts: fullMetas,
    },
  };
}
