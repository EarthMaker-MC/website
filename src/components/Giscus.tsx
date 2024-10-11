import { useColorMode } from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Giscus from "@giscus/react";

export default function GiscusComments() {
    const { colorMode } = useColorMode();
    const { i18n } = useDocusaurusContext();
    const { currentLocale } = i18n;

    return <Giscus
        id="comments"
        repo="earthmaker-mc/website"
        repoId="R_kgDOMCQvZw"
        category="Comments"
        categoryId="DIC_kwDOMCQvZ84ChtUa"
        mapping="pathname"
        strict="1"
        reactionsEnabled="1"
        inputPosition="top"
        theme={colorMode === "light" ? "https://giscus.catppuccin.com/themes/latte.css" : "https://giscus.catppuccin.com/themes/mocha.css"}
        lang={currentLocale}
        loading="lazy"
    />
}
