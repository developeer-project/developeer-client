import React, { useState } from "react";
import { Group, createStyles, Paper, Text, Title, Button, Badge,   Card,
  Image,
  // Box,
  // Button,
  useMantineTheme,
  ActionIcon, Tabs, Box, SimpleGrid, TextInput } from "@mantine/core";
// import { Tabs, Box, SimpleGrid, TextInput } from "@mantine/core";
import { Photo, MessageCircle, Settings } from "tabler-icons-react";
import { At } from "tabler-icons-react";
import { useSession } from "next-auth/react"
import { ProjectInfoCard } from "./ProjectInfoCard";

import { Link, BrandGithub } from "tabler-icons-react";



export function InfoTab({ userData, userProjects }) {
  // console.log("PROJECTS IN INFOR TAB::", userProjects)
  // const [projects, setProjects] = useState(userProjects);
  return (
    <Tabs color="indigo" tabPadding="sm">
      <Tabs.Tab label="Developer Info" icon={<Photo size={14} />}>
        <DeveloperInfo userData={userData} />
      </Tabs.Tab>
      <Tabs.Tab label="Past Projects" icon={<MessageCircle size={14} />}>
        <Group sx={{ width: "100%", padding: "12px" }}>
          {userProjects.map((project, index) => (
            <ArticleCardImage
              image={project.image}
              category={project.category}
              title={project.title}
              project={project}
            />
            // <ProjectInfoCard project={project} key={index} />
          ))}
        </Group>
      </Tabs.Tab>
      {/* <Tabs.Tab label="Connections" icon={<Settings size={14} />}>
        <DeveloperInfo />
      </Tabs.Tab> */}
    </Tabs>
  );
}

function DeveloperInfo({userData}) {

  return (
    <Box>
      <SimpleGrid cols={2} spacing="xl">
        <Box sx={{ width: "400px" }}>
          <TextInput
            label="Name"
            icon={<At />}
            variant="filled"
            placeholder="Name"
            value={userData.name ? userData.name: null}
          />
        </Box>
        <Box sx={{ width: "400px" }}>
          <TextInput
            label="Email"
            icon={<At />}
            variant="filled"
            placeholder="Email"
            value={userData.email ? userData.email: "demoemail@gmail.com"}
          />
        </Box>

        <Box sx={{ width: "400px" }}>
          <TextInput
            label="Location"
            icon={<At />}
            variant="filled"
            placeholder="Location"
            value={userData.location ? userData.location: "Demo Location"}
          />
        </Box>

        <Box sx={{ width: "400px" }}>
          {/* <TextInput
            label="Hello"
            icon={<At />}
            variant="filled"
            placeholder="Your email"
          /> */}
          <Text>Skills</Text>
          {userData.skills?.map((ts) => (
                  <Badge
                    variant="gradient"
                    size="xl"
                    gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
                    sx={{ marginRight: 15 }}>
                    {ts}
                  </Badge>
                ))}
        </Box>
        <Box sx={{ width: "400px" }}>
          <TextInput
            label="Bio"
            icon={<At />}
            variant="filled"
            placeholder="Your email"
            value={userData.bio ? userData.bio: "Demo bio"}
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
}

const useStyles2 = createStyles((theme) => ({
  card: {
    height: 340,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  title: {
    fontFamily: `Greycliff CF ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 26,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

// export function ArticleCardImage({ image, title, category }) {
//   const { classes } = useStyles();

//   return (
//     <Paper
//       shadow="md"
//       p="xl"
//       radius="md"
//       sx={{ backgroundImage: `url(${image})` }}
//       className={classes.card}>
//       <div>
//         <Text className={classes.category} size="xs">
//           {category}
//         </Text>
//         <Title order={3} className={classes.title}>
//           {title}
//         </Title>
//       </div>
//       <Button variant="white" color="dark">
//         Read article
//       </Button>
//     </Paper>
//   );
// }

export function ArticleCardImage({ image, title, category, project }) {
  // const { classes } = useStyles2();

  // return (
  //   <Paper
  //     shadow="md"
  //     p="xl"
  //     radius="md"
  //     sx={{ backgroundImage: `url(${image})` }}
  //     className={classes.card}>
  //     <div>
  //       <Text className={classes.category} size="xs">
  //         {project.description}
  //       </Text>
  //       <Title order={2} className={classes.title}>
  //         {project.title}
  //       </Title>
  //     </div>
  //     <Button variant="white" color="dark">
  //       Read article
  //     </Button>
  //   </Paper>
  // );

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
