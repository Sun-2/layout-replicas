import Head from "next/head";
import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { WebsiteCard } from "../components/WebsiteCard";
import styled from "styled-components";
import { Layout } from "../components/WebsiteCard/components/Layout";

export default function Home() {
  return (
    <>
      <Typography>
        This is where I replicate layouts or parts of layouts of popular
        websites to hone CSS skills. Replicas are focused on the layout only,
        and typically do not include any aesthetics or interactivity.
      </Typography>
      <SGrid container spacing={3} alignItems="flex-start">
        <WebsiteCard
          name="Digital Ocean"
          originalUrl="https://digitalocean.com"
          layoutUrl="/layouts/do"
          layouts={[
            {
              originalScreenshotUrl: "https://i.imgur.com/AxbLIwe.png",
              myScreenshotUrl: "https://i.imgur.com/OSpvROP.png",
              name: "Server table",
              codeUrl: "#",
              originalUrl: "#",
              showcaseUrl: "#",
            },
            {
              originalScreenshotUrl: "https://i.imgur.com/AxbLIwe.png",
              myScreenshotUrl: "https://i.imgur.com/OSpvROP.png",
              name: "Server table",
              codeUrl: "#",
              originalUrl: "#",
              showcaseUrl: "#",
            },
          ]}
        />
        <WebsiteCard
          name="Facebook"
          originalUrl="https://facebook.com"
          iconUrl="https://i.imgur.com/u5L5Y5F.png"
          layoutUrl="/layouts/do"
          layouts={[
            {
              originalScreenshotUrl: "https://i.imgur.com/AxbLIwe.png",
              myScreenshotUrl: "https://i.imgur.com/OSpvROP.png",
              name: "Server table",
              codeUrl: "#",
              originalUrl: "#",
              showcaseUrl: "#",
            },
          ]}
        />
      </SGrid>
    </>
  );
}

const SGrid = styled(Grid)`
  && {
    margin: 0 auto;
    align-items: stretch;
    width: 100%;
    max-width: 1200px;
  }
`;
