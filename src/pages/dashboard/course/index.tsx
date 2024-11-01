import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import MyCourse from 'src/sections/overview/course/view/my-course-view';

// ----------------------------------------------------------------------

const metadata = { title: `Course | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <MyCourse />
    </>
  );
}
