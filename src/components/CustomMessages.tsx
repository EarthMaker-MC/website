import { useColorMode } from '@docusaurus/theme-common';
import { DiscordMessages } from '@skyra/discord-components-react';
import Layout from '@theme/Layout';
import { ReactNode } from "react";

export function CustomMessages({ children }: { children: ReactNode }) {
    const { colorMode } = useColorMode();
    return <DiscordMessages lightTheme={colorMode === "light"}>{children}</DiscordMessages>;
}