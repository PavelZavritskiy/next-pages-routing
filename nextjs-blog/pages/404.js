import Link from "next/link";
import Layout from '../components/layout';

// pages/404.js
export default function Custom404() {
  return (
<>
                <h1>404 - Page Not Found</h1>
            <Link href={'/'}>Go Home Page</Link>
</>


  )


}