import { Box, Center } from "native-base";

export default function Card(props: any) {
  let color = "white";
  if (props.green) {
    color = "green.400";
  }
  if (props.center)
    return (
      <Box
        h={props.h}
        backgroundColor={color}
        shadow={1}
        flex={1}
        padding={5}
        rounded={20}
      >
        <Center>{props.children}</Center>
      </Box>
    );
  return (
    <Box
      h={props.h}
      backgroundColor={color}
      shadow={1}
      flex={1}
      padding={5}
      rounded={20}
    >
      {props.children}
    </Box>
  );
}
