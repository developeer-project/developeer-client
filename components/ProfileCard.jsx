import React from 'react';
import { Heart } from 'tabler-icons-react';
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  createStyles,
  useMantineTheme,
} from '@mantine/core';
import { dummyData } from '../lib/utils/testobj';
import { MessageCircle } from 'tabler-icons-react';
import { Message } from 'tabler-icons-react';
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));

console.log("PRINTING FROM PROFILE CARD1:")


export function ProfileCard({ image, title, description, country, badges, user }) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  console.log("PRINTING FROM PROFILE CARD2:", user)
//   const features = user.skills?.map((ts) => (
//       <Badge
//         variant="gradient"
//         gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
//         sx={{ paddingRight: 10 }}>
//         ts
//       </Badge>
//     ))

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src="https://cdn.discordapp.com/attachments/951426015404654612/968930022524067911/empty-profile-picture-png-2-2.png" alt={title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text size="lg" weight={500}>
            {user.name}
          </Text>
          <Badge size="sm">{user.location}</Badge>
        </Group>
        <Text size="sm" mt="xs">
          {user.bio}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} color="dimmed">
          Perfect for you, if you enjoy
        </Text>
        <Group spacing={7} mt={5}>
        {user.skills?.map((ts) => (
                  <Badge
                    variant="gradient"
                    gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
                    sx={{ paddingRight: 10 }}>
                    {ts}
                  </Badge>
                ))}
        </Group>
      </Card.Section>

      <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }}>
          Show details
        </Button>
        <div style={{cursor: 'pointer'}}>

        <ActionIcon component={Link} href={`/${user.name}`} variant="default" radius="md" size={36} >
          
          {/* <Heart size={18} className={classes.like} /> */}

          <MessageCircle
            size={46}
            strokeWidth={2}
            color={'#4099bf'}
            className={classes.message}
            
            />
        </ActionIcon>
            </div>
        
         {/* <Message
    size={46}
    strokeWidth={2}
    color={'#000000'}
  />; */}
      </Group>
    </Card>
  );
}