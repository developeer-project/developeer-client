import React, { useState } from "react";
import { Database } from "tabler-icons-react";
import {
  createStyles,
  Header,
  Button,
  Group,
  ActionIcon,
  Container,
  Burger,
} from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
import { BrandTwitter, BrandYoutube, BrandInstagram } from "tabler-icons-react";
// import { MantineLogo } from "../../shared/MantineLogo";
import Image from "next/image";
import Logo from "../public/Logo.png";
import { useSession } from "next-auth/react";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 56,

    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start",
    },
  },

  links: {
    width: 260,

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  social: {
    width: 260,

    [theme.fn.smallerThan("sm")]: {
      width: "auto",
      marginLeft: "auto",
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    fontFamily: "sans-serif",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
      color:
        theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 3 : 7],
    },
  },
}));

export function HeaderMiddle({ links }) {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();
  const ssn = useSession();

  console.log(ssn);

  const items = links.map((link) => (
    <Link href={link.link}>
      <a
        key={link.label}
        href={link.link}
        className={cx(classes.link, {
          [classes.linkActive]: active === link.link,
        })}>
        {link.label}
      </a>
    </Link>
  ));

  return (
    <Header height={56}>
      <Container className={classes.inner}>
        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          size="sm"
          className={classes.burger}
        />
        <Group className={classes.links} align="center" spacing={5}>
          {items}
        </Group>

        {/* <MantineLogo /> */}
        <Image src={Logo} />

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <Link
            passHref
            href={
              ssn.status === "authenticated"
                ? "/app/activate-profile"
                : "/auth/signin"
            }>
            <Button
              loading={ssn.status === "loading"}
              variant="gradient"
              component="a"
              size="sm"
              gradient={{ from: "orange", to: "red" }}>
              {ssn.status === "authenticated" ? "My Profile" : "Get Started"}
            </Button>
          </Link>
        </Group>
      </Container>
    </Header>
  );
}
