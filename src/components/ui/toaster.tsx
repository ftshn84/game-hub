"use client";

import {
  // Toaster as ChakraToaster, (removed because it does not exist)
  Portal,
  Spinner,
  Stack,
  Toast,
  createToastFn,
} from "@chakra-ui/react";

// If you want to use the default direction, pass "ltr" or "rtl" as needed
export const toaster = createToastFn("ltr");

export const Toaster = () => {
  return (
    <Portal>
      {/* ChakraToaster does not exist, so we need to implement the toast rendering logic here or use Toast directly */}
      {/* Example: Render nothing or your own toast logic */}
      {/* You may need to implement your own Toaster logic or use a different toast provider */}
      {/* For now, this is a placeholder */}
      <></>
    </Portal>
  );
};
