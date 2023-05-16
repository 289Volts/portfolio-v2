import * as React from 'react';
import { Html } from '@react-email/html';
import { Button } from '@react-email/button';

export function Email() {
//   const { url } = props;

  return (
    <Html lang="en">
      <Button href={"https://google.com"}>Click me</Button>
    </Html>
  );
}