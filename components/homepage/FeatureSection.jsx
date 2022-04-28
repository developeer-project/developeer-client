import React from "react";
import {
  createStyles,
  Title,
  SimpleGrid,
  Text,
  Button,
  ThemeIcon,
  Grid,
  Col,
  Box,
} from "@mantine/core";
import { ReceiptOff, Flame, CircleDotted, FileCode } from "tabler-icons-react";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `${theme.spacing.xl * 3}px ${theme.spacing.xl}px`,
    marginTop: theme.spacing.xl * 3,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 36,
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
}));

const features = [
  {
    icon: ReceiptOff,
    title: "Open for any level",
    description:
      "Be it absolute beginners, intermediate or devs wanting to learn something new.",
  },
  {
    icon: FileCode,
    title: "Discover new projects",
    description: "Learn something new on collaborating on interesting projects",
  },
  {
    icon: CircleDotted,
    title: "Get help quickly",
    description: "Getting help is easy thanks to large community of builders",
  },
  {
    icon: Flame,
    title: "Flexible",
    description:
      "Customize colors, spacing, shadows, fonts and many other settings with global theme object",
  },
];

export function FeaturesSection() {
  const { classes } = useStyles();

  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: "blue", to: "cyan" }}>
        <feature.icon size={26} />
      </ThemeIcon>
      <Text size="lg" mt="sm" weight={500}>
        {feature.title}
      </Text>
      <Text color="dimmed" size="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <Box
      sx={(theme) => ({ width: "85%" })}
      mx="auto"
      className={classes.wrapper}>
      <Grid gutter={80}>
        <Col span={12} md={5}>
          <Title className={classes.title} order={2}>
            A single place to discover new Projects and Developers.
          </Title>
          <Text color="dimmed">
            No more wasting of time asking friends, getting stuck for no support
            and guidance.
          </Text>
          <Link href="/app">
            <Button
              href="/app"
              variant="gradient"
              gradient={{ deg: 133, from: "blue", to: "cyan" }}
              size="lg"
              radius="md"
              mt="xl">
              Get started
            </Button>
          </Link>
        </Col>
        <Col span={12} md={7}>
          <SimpleGrid
            cols={2}
            spacing={30}
            breakpoints={[{ maxWidth: "md", cols: 1 }]}>
            {items}
          </SimpleGrid>
        </Col>
      </Grid>
    </Box>
  );
}
