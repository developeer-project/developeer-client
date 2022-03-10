import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";

const WorkFlowCard = () => {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <div className="card">
      <Card shadow="sm" padding="lg">
        <Card.Section>
          <Image
            src="https://cdn.discordapp.com/attachments/792429986094907392/819921606344310784/icon3d__158.png"
            height={180}
            alt="Norway"
          />
        </Card.Section>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Text weight={500}>Norway Fjord Adventures</Text>
          <Badge color="pink" variant="light">
            On Sale
          </Badge>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          With Fjord Tours you can explore more of the magical fjord landscapes
          with tours and activities on and around the fjords of Norway
        </Text>

        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
        >
          Book classic tour now
        </Button>
      </Card>
      <style jsx>
        {`
          .card {
            width: 20rem;
          }
        `}
      </style>
    </div>
  );
};

export default WorkFlowCard;
