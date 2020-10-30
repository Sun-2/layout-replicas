import React, { FC, useMemo } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Paper,
  Tooltip,
  Typography,
  Link,
} from "@material-ui/core";
import styled from "styled-components";
import LinkIcon from "@material-ui/icons/Link";
import { media } from "../../utils/media";

export type LayoutProps = {
  layoutName: string;

  sourceName: string;
  sourceUrl: string;
  sourceScreenshotUrl: string;
  sourceIconUrl: string;

  myCodeUrl: string;
  myShowcaseUrl: string;
  myScreenshotUrl: string;
};

export const Layout: FC<LayoutProps> = (props) => {
  const { ...rest } = props;

  const iconUrl = useMemo(() => {
    if (props.sourceIconUrl) return props.sourceIconUrl;
    const url = new URL(props.sourceUrl);
    url.pathname += "favicon.ico";
    return url.toString();
  }, [props.sourceIconUrl || props.sourceUrl]);

  return (
    <Grid item xs={12} xl={6}>
      <RootBox component={Paper} pt={3} pb={3} iconUrl={props.sourceIconUrl}>
        <Box display={"flex"} justifyContent={"center"}>
          <Box
            display={"inline-flex"}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box display="flex" alignItems={"center"}>
              <img height={16} src={props.sourceIconUrl} alt="" />
              <Box pl={1}>
                <Link href={props.sourceUrl}>
                  <Typography align="center" variant="h6">
                    {props.sourceName}
                  </Typography>
                </Link>
              </Box>
            </Box>

            <Divider
              flexItem
              orientation="horizontal"
              style={{ height: "1px" }}
            />

            <Typography align="center" variant={"h6"}>
              {props.layoutName}
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          p={2}
          width={"50%"}
          minWidth={"338px"}
          mx="auto"
        >
          <ButtonGroup variant="text" fullWidth>
            <LinkButton href={props.myShowcaseUrl} size="small">
              Showcase
            </LinkButton>
            <LinkButton href={props.myCodeUrl} size="small">
              My Code
            </LinkButton>
            <LinkButton href={props.sourceUrl} size="small">
              Source
            </LinkButton>
          </ButtonGroup>
        </Box>

        <Grid container>
          <ImgGrid item xs={12} md={6}>
            <Box
              component="a"
              /* @ts-ignore */
              href={props.myScreenshotUrl}
            >
              <Tooltip title="Replica" placement="top">
                <img
                  height={"100%"}
                  width={"100%"}
                  src={props.myScreenshotUrl}
                />
              </Tooltip>
            </Box>
          </ImgGrid>

          <ImgGrid item xs={12} md={6}>
            <Box
              component="a"
              /* @ts-ignore */
              href={props.sourceUrl}
            >
              <Tooltip title="source" placement="top">
                <img
                  height={"100%"}
                  width={"100%"}
                  src={props.sourceScreenshotUrl}
                />
              </Tooltip>
            </Box>
          </ImgGrid>
        </Grid>
      </RootBox>
      <DividerBox>
        <Divider />
      </DividerBox>
    </Grid>
  );
};

const LinkButton = styled(Button)`
  && {
    font-weight: normal;
  }
`;

const ImgGrid = styled(Grid)`
  border-style: dashed;
  border-color: ${({ theme }) => theme.palette.grey.A200};
  border-width: 2px 0;

  &:last-child {
    border-top-width: 0;
    ${media.md} {
      border-top-width: 2px;
    }
  }

  ${media.md} {
    border-left-width: 2px;
    &:first-child {
      border-left-width: 0;
    }
  }
`;

const RootBox = styled(Box)<{ iconUrl: string }>`
  &:last-child {
    padding-bottom: 0;
  }

  position: relative;
  &::after {
    display: block;
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    opacity: 0.25;
    z-index: 1;
    top: 0;
    bottom: 0;
    background-image: url("${({ iconUrl }) => iconUrl}");
    background-position: 3% 0%;
    background-size: 25%;
    background-repeat: no-repeat;
    pointer-events: none;

    ${media.md} {
      background-size: 17%;
    }
  }

  & > * {
    position: relative;
    z-index: 2;
  }
`;

const DividerBox = styled(Box)`
  &:last-child {
    display: none;
  }
`;
