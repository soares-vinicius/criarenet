import React from "react";
import { Box, Image, Link } from "@chakra-ui/react";

import Logo from "../imgs/logo.png";

export default function Menu(): React.ReactElement {
  return (
    <Box background="white">
      <Box maxW="1080px" padding="15px 25px" margin="0 auto">
        <Link href="/">
          <Image src={Logo} margin={{ base: "0 auto", md: "0 0" }} />
        </Link>
      </Box>
    </Box>
  );
}
