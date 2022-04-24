import {
  Card,
  Image,
  Text,
  Badge,
  Box,
  Button,
  Group,
  useMantineTheme,
  ActionIcon,
} from "@mantine/core";

import { Link, BrandGithub } from "tabler-icons-react";

export default function ProjectInfoCard({ project }) {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <div style={{ width: 280 }}>
      <Card radius="md" shadow="sm" p="sm">
        <Card.Section mx="auto" sx={{ width: "100%" }}>
          <Image
            src="https://cdn.discordapp.com/attachments/951426015404654612/952147112060133426/D2_logo.png"
            height={140}
            alt="Norway"
            mx="auto"
          />
        </Card.Section>

        <Group
          position="apart"
          style={{
            marginBottom: 5,
            width: "100%",
            marginTop: theme.spacing.sm,
          }}>
          <Text weight={600}>{project.title}</Text>
          <Group direction="row" position="right">
            <ActionIcon
              component="a"
              href={project.link}
              color="teal"
              variant="hover">
              <Link />
            </ActionIcon>
            <ActionIcon
              component="a"
              href={project.repo}
              color="teal"
              variant="hover">
              <BrandGithub />
            </ActionIcon>
          </Group>
        </Group>
        <Box sx={{ width: "100%" }}>
          <Text
            size="sm"
            style={{
              border: "1px red",
              color: secondaryColor,
              lineHeight: 1.5,
            }}>
            {project.description}
          </Text>
        </Box>
        <Group direction="row" justify="space-between" align="center">
          {project.tech_stack.map((tech) => (
            <Badge variant="light" color="orange">
              {tech}
            </Badge>
          ))}
        </Group>
      </Card>
    </div>
  );
}
