import React, { JSX } from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import type BlogPostItemType from '@theme/BlogPostItem';
import type { WrapperProps } from '@docusaurus/types';
import { useBlogPost } from "@docusaurus/plugin-content-blog/lib/client/contexts.js"
import GiscusComments from '@site/src/components/Giscus';

type Props = WrapperProps<typeof BlogPostItemType>;

export default function BlogPostItemWrapper(props: Props): JSX.Element {
  const { isBlogPostPage, metadata } = useBlogPost();
  const { frontMatter } = metadata;
  const { showComments = true } = frontMatter;

  return (
    <>
      <p>
        <BlogPostItem {...props} />
      </p>
      {showComments && isBlogPostPage && <p><GiscusComments /></p>}
    </>
  );
}
