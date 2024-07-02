import { useColorMode } from '@docusaurus/theme-common';
import { DiscordMessages } from '@skyra/discord-components-react';
import { ReactNode } from "react";

export function CustomMessages({ children }: { children: ReactNode }) {
    const { colorMode } = useColorMode();
    return <DiscordMessages lightTheme={colorMode === "light"}>{children}</DiscordMessages>;
}