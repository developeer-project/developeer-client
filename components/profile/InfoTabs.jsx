import React from "react";
import { Group, createStyles, Paper, Text, Title, Button } from "@mantine/core";
import { Tabs, Box, SimpleGrid, TextInput } from "@mantine/core";
import { Photo, MessageCircle, Settings } from "tabler-icons-react";
import { At } from "tabler-icons-react";

export function InfoTab() {
  const projects = [
    {
      image:
        "https://images.pexels.com/photos/52547/lantern-festival-seoul-cheonggyecheon-stream-lantern-52547.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "My First Project",
      category: "Blockchain",
    },
    {
      image:
        "https://images.pexels.com/photos/52547/lantern-festival-seoul-cheonggyecheon-stream-lantern-52547.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "My First Project",
      category: "Blockchain",
    },
    {
      image:
        "https://images.pexels.com/photos/52547/lantern-festival-seoul-cheonggyecheon-stream-lantern-52547.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "My First Project",
      category: "Blockchain",
    },
    {
      image:
        "https://images.pexels.com/photos/52547/lantern-festival-seoul-cheonggyecheon-stream-lantern-52547.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "My First Project",
      category: "Blockchain",
    },
  ];
  return (
    <Tabs color="indigo" tabPadding="sm">
      <Tabs.Tab label="Developer Info" icon={<Photo size={14} />}>
        <DeveloperInfo />
      </Tabs.Tab>
      <Tabs.Tab label="Past Projects" icon={<MessageCircle size={14} />}>
        <Group sx={{ width: "100%", padding: "12px" }}>
          {projects.map((pro) => (
            <ArticleCardImage
              image={pro.image}
              category={pro.category}
              title={pro.title}
            />
          ))}
        </Group>
      </Tabs.Tab>
      <Tabs.Tab label="Connections" icon={<Settings size={14} />}>
        <DeveloperInfo />
      </Tabs.Tab>
    </Tabs>
  );
}

function DeveloperInfo() {
  return (
    <Box>
      <SimpleGrid cols={2} spacing="xl">
        <Box sx={{ width: "400px" }}>
          <TextInput
            label="Hello"
            icon={<At />}
            variant="filled"
            placeholder="Your email"
          />
        </Box>
        <Box sx={{ width: "400px" }}>
          <TextInput
            label="Hello"
            icon={<At />}
            variant="filled"
            placeholder="Your email"
          />
        </Box>

        <Box sx={{ width: "400px" }}>
          <TextInput
            label="Hello"
            icon={<At />}
            variant="filled"
            placeholder="Your email"
          />
        </Box>

        <Box sx={{ width: "400px" }}>
          <TextInput
            label="Hello"
            icon={<At />}
            variant="filled"
            placeholder="Your email"
          />
        </Box>
        <Box sx={{ width: "400px" }}>
          <TextInput
            label="Hello"
            icon={<At />}
            variant="filled"
            placeholder="Your email"
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

export function ArticleCardImage({ image, title, category }) {
  const { classes } = useStyles2();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}>
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={2} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Read article
      </Button>
    </Paper>
  );
}
