import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import { useDoc } from "@docusaurus/plugin-content-docs/lib/client/doc.js"
import type FooterType from '@theme/DocItem/Footer';
import type { WrapperProps } from '@docusaurus/types';
import GiscusComments from '@site/src/components/Giscus';

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  const { metadata } = useDoc();
  const { frontMatter, permalink } = metadata;
  const { showComments = true } = frontMatter;
  console.log(metadata);

  return (
    <>
      <Footer {...props} />
      {showComments && permalink.startsWith("/maps/") && permalink !== "/maps/" && <GiscusComments />}
    </>
  );
}
