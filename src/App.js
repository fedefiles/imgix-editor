import React from "react";
import {
  Card,
  Grid,
  Row,
  Text,
  Container,
  Modal,
  Button,
  Input,
  Checkbox
} from "@nextui-org/react";
import { Mail } from "./Mail";
import { Password } from "./Password";

export default function App() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  const list = [
    {
      name: "alarmclock",
      img: "https://assets.imgix.net/unsplash/alarmclock.jpg"
    },
    {
      img: "https://assets.imgix.net/unsplash/bear.jpg",
      name: "bear"
    },
    {
      img: "https://assets.imgix.net/unsplash/bridge.jpg",
      name: "bridge.jpg"
    },
    {
      img: "https://assets.imgix.net/unsplash/citystreet.jpg",
      name: "citystreet.jpg"
    },
    {
      img: "https://assets.imgix.net/unsplash/coffee.JPG",
      name: "coffee.JPG"
    },
    {
      img: "https://assets.imgix.net/unsplash/coyote.jpg",
      name: "coyote.jpg"
    },
    {
      img: "https://assets.imgix.net/unsplash/goldengate.jpg",
      name: "goldengate.jpg"
    },
    {
      img: "https://assets.imgix.net/unsplash/macaque.jpg",
      name: "macaque.jpg"
    },
    {
      img: "https://assets.imgix.net/unsplash/mountains.jpg",
      name: "mountains.jpg"
    },
    {
      img: "https://assets.imgix.net/unsplash/paperlamp.jpg",
      name: "paperlamp.jpg"
    },
    {
      img: "https://assets.imgix.net/unsplash/pineneedles.jpg",
      name: "pineneedles.jpg"
    },
    {
      img: "https://assets.imgix.net/unsplash/raspberries.jpg",
      name: "raspberries.jpg"
    },
    {
      img: "https://assets.imgix.net/unsplash/transport.jpg",
      name: "transport.jpg"
    },
    {
      img: "https://assets.imgix.net/unsplash/turntable.jpg",
      name: "turntable.jpg"
    },
    {
      img: "https://assets.imgix.net/unsplash/typewriter.jpg",
      name: "typewriter.jpg"
    },
    {
      img: "https://assets.imgix.net/unsplash/umbrella.jpg",
      name: "umbrella.jpg"
    },
    {
      img: "https://assets.imgix.net/unsplash/vintagecameras.jpg",
      name: "vintagecameras.jpg"
    },
    {
      img: "https://assets.imgix.net/unsplash/windows.jpg",
      name: "windows.jpg"
    },

    {
      img: "https://assets.imgix.net/blog/woman-hat.jpg",
      name: "woman-hat.jpg"
    },
    {
      img: "https://assets.imgix.net/examples/balloons.jpg",
      name: "balloons.jpg"
    }
  ];

  return (
    <Container>
      <Card css={{ $$cardColor: "$colors$primary" }}>
        <Card.Body>
          <Row justify="center" align="center">
            <Text h6 size={25} color="white" css={{ m: 0 }}>
              IMGIX-UI
            </Text>
          </Row>
        </Card.Body>
      </Card>

      <Grid.Container gap={2} justify="flex-start">
        {list.map((item, index) => (
          <Grid xs={6} sm={3} key={index}>
            <Card isPressable onPress={handler}>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={item.img}
                  objectFit="cover"
                  width="100%"
                  height={140}
                  alt={item.title}
                />
              </Card.Body>
              <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text b>{item.title}</Text>
                  <Text
                    css={{
                      color: "$accents7",
                      fontWeight: "$semibold",
                      fontSize: "$sm"
                    }}
                  >
                    {item.price}
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to
            <Text b size={18}>
              IMGIX/UI Editor
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            contentLeft={<Mail fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            contentLeft={<Password fill="currentColor" />}
          />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={closeHandler}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
