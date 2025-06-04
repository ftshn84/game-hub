import { useToast } from "@chakra-ui/react";

const Toaster = () => {
  const toast = useToast();

  return (
    <button
      onClick={() =>
        toast({
          title: "Notification",
          description: "This is a toast message!",
          status: "info",
          duration: 5000,
          isClosable: true,
        })
      }
    >
      Show Toast
    </button>
  );
};

export default Toaster;
