import Head from "../head";
import Sections from "./sections";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export default async function Store() {
  return (
    <>
      <Head
        title="Store | Lobstr.io"
        description="Hundreds or ready-made data scrapers, from social media to e-commerce to real estate. Choose the one you love."
        image="https://cdn-lobstr.s3.eu-west-3.amazonaws.com/lobstr_meta.png"
        url={`${SITE_URL}/store`}
        type="website"
      />
      <Sections />
    </>
  );
}
