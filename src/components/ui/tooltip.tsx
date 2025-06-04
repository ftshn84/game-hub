import {
  Tooltip as ChakraTooltip,
  Portal,
  TooltipProps as ChakraTooltipRootProps,
} from "@chakra-ui/react";
import * as React from "react";

export interface TooltipProps extends Omit<ChakraTooltipRootProps, "content"> {
  showArrow?: boolean;
  portalled?: boolean;
  portalRef?: React.RefObject<HTMLElement>;
  content: React.ReactNode;
  contentProps?: Record<string, any>;
  disabled?: boolean;
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (props, ref) => {
    const {
      showArrow,
      children,
      disabled,
      portalled = true,
      content,
      contentProps,
      portalRef,
      ...rest
    } = props;

    // ✅ Ensure children are wrapped properly when returning
    if (disabled) {
      return <>{children}</>; // Fix: Ensures a valid React element is always returned
    }

    const tooltipElement = (
      <ChakraTooltip
        {...rest}
        label={content}
        hasArrow={showArrow}
        ref={ref}
        {...contentProps}
      >
        {children}
      </ChakraTooltip>
    );

    if (portalled) {
      return <Portal containerRef={portalRef}>{tooltipElement}</Portal>;
    }

    return tooltipElement;
  }
);
