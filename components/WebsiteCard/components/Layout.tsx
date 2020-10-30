import React, { FC } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Grid,
  Paper,
  Tooltip,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";
import LinkIcon from "@material-ui/icons/Link";
import { media } from "../../../utils/media";

export type LayoutProps = {
  name: string;

  codeUrl: string;
  showcaseUrl: string;
  originalUrl: string;

  myScreenshotUrl: string;
  originalScreenshotUrl: string;
};

export const Layout: FC<LayoutProps> = (props) => {
  const { ...rest } = props;

  return (
    <>
      <RootBox pt={3} pb={3}>
        <Typography align="center" variant={"h5"}>
          {props.name}
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          p={2}
          width={"50%"}
          minWidth={"338px"}
          mx="auto"
        >
          <ButtonGroup variant="text" fullWidth>
            <LinkButton href={props.showcaseUrl} size="small">
              Showcase
            </LinkButton>
            <LinkButton href={props.codeUrl} size="small">
              Code
            </LinkButton>
            <LinkButton href={props.originalUrl} size="small">
              Original
            </LinkButton>
          </ButtonGroup>
        </Box>

        <Grid container>
          <ImgGrid item xs={12} sm={6}>
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

          <ImgGrid item xs={12} sm={6}>
            <Box
              component="a"
              /* @ts-ignore */
              href={props.originalUrl}
            >
              <Tooltip title="Original" placement="top">
                <img
                  height={"100%"}
                  width={"100%"}
                  src={props.originalScreenshotUrl}
                />
              </Tooltip>
            </Box>
          </ImgGrid>
        </Grid>
      </RootBox>
      <DividerBox>
        <Divider />
      </DividerBox>
    </>
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
  border-width: 0;

  &:not(:last-child) {
    border-bottom-width: 1px;
  }

  ${media.sm} {
    && {
      border-bottom-width: 0;
    }
    &:not(:last-child) {
      border-right-width: 1px;
    }
  }
`;

const RootBox = styled(Box)`
  &:last-child {
    padding-bottom: 0;
  }
`;

const DividerBox = styled(Box)`
  &:last-child {
    display: none;
  }
`;
