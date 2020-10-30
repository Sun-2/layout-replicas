import React, { FC, useCallback, useMemo, useState } from "react";
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
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
  isSourcePublic: boolean;

  myCodeUrl: string;
  myShowcaseUrl: string;
  myScreenshotUrl: string;
};

export const Layout: FC<LayoutProps> = (props) => {
  const { ...rest } = props;

  const [showOpenSourceDialog, setShowOpenSourceDialog] = useState(false);

  const iconUrl = useMemo(() => {
    if (props.sourceIconUrl) return props.sourceIconUrl;
    const url = new URL(props.sourceUrl);
    url.pathname += "favicon.ico";
    return url.toString();
  }, [props.sourceIconUrl || props.sourceUrl]);

  const onSourceClick = useCallback(
    (e) => {
      if (props.isSourcePublic) return window.open(props.sourceUrl, "_blank");
      setShowOpenSourceDialog(true);
    },
    [props.isSourcePublic]
  );

  const closeSourceDialog = useCallback(
    () => setShowOpenSourceDialog(false),
    []
  );

  return (
    <>
      <Dialog {...rest} open={showOpenSourceDialog}>
        <DialogTitle>Private source</DialogTitle>
        <DialogContent>
          <DialogContentText>
            The source of this layout is unavailable, probably because you must
            be logged in on the <a target="_blank" href={props.sourceUrl}>target site</a> to see
            it.
          </DialogContentText>
          <DialogActions>
            <Button onClick={closeSourceDialog}>Cancel</Button>
            <Button href={props.sourceScreenshotUrl}>View screenshot</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
      <Grid item xs={12} xl={6}>
        <RootBox component={Paper} pt={3} pb={3} iconUrl={iconUrl}>
          <Box display={"flex"} justifyContent={"center"}>
            <Box
              display={"inline-flex"}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box display="flex" alignItems={"center"}>
                <img height={16} src={iconUrl} alt="" />
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
            mx="auto"
          >
            <LinksButtonGroup variant="text" fullWidth>
              <LinkButton
                href={props.myShowcaseUrl}
                size="small"
                //@ts-ignore
                target={"_blank"}
              >
                View Live
              </LinkButton>
              <LinkButton
                href={props.myCodeUrl}
                size="small"
                //@ts-ignore
                target={"_blank"}
              >
                My Code
              </LinkButton>
              <LinkButton
                onClick={onSourceClick}
                size="small"
                //@ts-ignore
                target={"_blank"}
              >
                Source
              </LinkButton>
            </LinksButtonGroup>
          </Box>

          <Grid container>
            <ImgGrid item xs={12} md={6}>
              <Box
                component="a"
                /* @ts-ignore */
                href={props.myScreenshotUrl}
              >
                <Tooltip title="Replica" placement="top">
                  <a onClick={onSourceClick} target={"_blank"}>
                    <img
                      height={"100%"}
                      width={"100%"}
                      src={props.myScreenshotUrl}
                    />
                  </a>
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
    </>
  );
};

const LinksButtonGroup = styled(ButtonGroup)`
  flex-direction: column;
  ${media.sm} {
    flex-direction: row;
  }
`;

const LinkButton = styled(Button)`
  &&& {
    font-weight: normal;

    border-right: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.23);
    ${media.sm} {
      border-right: 1px solid rgba(0, 0, 0, 0.23);
      border-bottom: none;
      &:last-child {
        border-right: none;
      }
    }
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
