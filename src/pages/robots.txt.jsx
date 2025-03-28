const RobotsText = () => {
  return null;
};

export default RobotsText;

export async function getServerSideProps({ params, req, res, query }) {
  try {
    let robotsText = `User-agent: *
    Allow: /`;
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=60, stale-while-revalidate=3600"
    );

    res.setHeader("Content-Type", "text");
    res.write(robotsText);
    res.end();
  } catch (error) {}
  return { props: {} };
}
