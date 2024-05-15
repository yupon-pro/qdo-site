import { Tooltip, Zoom } from "@mui/material";
import { FC, ReactElement, ReactNode } from "react";

export const FooterTooltip: FC<{ title: string; children: ReactElement }> = ({ title, children }) => {
  return (
    <Tooltip
      arrow
      title={title}
      placement="top"
      TransitionComponent={Zoom}
      slotProps={{
        popper: {
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, -7],
              },
            },
          ],
        },
      }}
    >
      {children}
    </Tooltip>
  );
};
