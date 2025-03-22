import { MetaProps } from "@/types/common";

const SOCIAL_HANDLE = process.env.NEXT_PUBLIC_SOCIAL_HANDLE;

const Head: React.FC<MetaProps> = ({
  title,
  date,
  description,
  url,
  image,
  type,
  readTime,
  author,
  schema,
}) => {
  return (
    <>
      <title>{title}</title>
      <link rel="icon" href="/images/favicon.svg" type="image/svg+xml" />
      <link
        rel="icon"
        href="/images/favicon-16x16.png"
        sizes="16x16"
        type="image/png"
      />
      <link
        rel="icon"
        href="/images/favicon-32x32.png"
        sizes="32x32"
        type="image/png"
      />
      <link
        rel="icon"
        href="/images/favicon-192x192.png"
        sizes="192x192"
        type="image/png"
      />
      <link
        rel="icon"
        href="/images/favicon-512x512.png"
        sizes="512x512"
        type="image/png"
      />

      <meta name="title" content={title} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta key="og:type" property="og:type" content={type} />
      <meta key="og:title" property="og:title" content={title} />
      <meta
        key="og:description"
        property="og:description"
        content={description}
      />
      <meta key="og:url" property="og:url" content={url} />
      <meta key="og:image" property="og:image" content={image} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content={SOCIAL_HANDLE} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      {date ? (
        <>
          <meta property="article:published_time" content={date} />
          <meta name="twitter:label1" content="Written by" />
          <meta name="twitter:data1" content={author} />
          <meta name="twitter:label2" content="Reading time" />
          <meta name="twitter:data2" content={`${readTime} minutes`} />
        </>
      ) : (
        ""
      )}
      <link rel="canonical" href={url} />
      {schema}
    </>
  );
};

export default Head;
