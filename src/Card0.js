import React from 'react';
import { Card, Row, Text } from "@nextui-org/react";

export const Card0 = () => (
    <Card css={{ $$cardColor: '$colors$primary' }}>
    <Card.Body>
      <Row justify="center" align="center">
        <Text h6 size={25} color="white" css={{ m: 0 }}>
          IMGIX-UI
        </Text>
      </Row>
    </Card.Body>
  </Card>
);