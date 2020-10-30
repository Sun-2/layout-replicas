import React, { FC, useMemo } from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";
import LinkIcon from "@material-ui/icons/Link";
import Link from "next/link";
import { Layout, LayoutProps } from "./components/Layout";

export type WebsiteCardProps = {
  name: string;
  originalUrl: string;
  layoutUrl: string;
  iconUrl?: string;
  layouts: LayoutProps[];
};

export const WebsiteCard: FC<WebsiteCardProps> = (props) => {
  const { ...rest } = props;

  const iconUrl = useMemo(() => {
    if (props.iconUrl) return props.iconUrl;
    const url = new URL(props.originalUrl);
    url.pathname += "favicon.ico";
    return url.toString();
  }, [props.iconUrl || props.originalUrl]);

  return (
    <Grid item xs={12} md={6}>
      <Root component={Paper} boxShadow={4} height={"100%"}>
        <LinkButton href={props.originalUrl}>
          <HeaderBox p={3} width={"100%"} iconUrl={iconUrl}>
            <Box display="flex" alignItems="center">
              <img
                height={64}
                width={64}
                src={iconUrl}
                alt={`${props.name} favicon`}
              />
              <Box pl={3} flexGrow={1}>
                <Typography variant="h4">{props.name}</Typography>
              </Box>
              <Box pl={3}>
                <IconButton href={props.originalUrl}>
                  <LinkIcon fontSize="large" />
                </IconButton>
              </Box>
            </Box>
          </HeaderBox>
        </LinkButton>
        <Divider />
        <Box>
          {props.layouts.map((layoutProps) => (
            <Layout {...layoutProps} />
          ))}
        </Box>
      </Root>
    </Grid>
  );
};

const LinkButton = styled(Button)`
  && {
    border-radius: 0;
    width: 100%;
    padding: 0;
    text-transform: none;
  }
`;

const Root = styled(Box)`
  position: relative;
  isolation: isolate;
  text-transform: none;
`;

const HeaderBox = styled(Box)<{ iconUrl: string }>`
  position: relative;
  &::after {
    display: block;
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    opacity: 0.2;
    z-index: -1;
    top: 0;
    bottom: 0;
    background-image: url("${({ iconUrl }) => iconUrl}");
    background-position: 30% 50%;
    background-size: 25%;
    background-repeat: no-repeat;
    pointer-events: none;
  }
`;
