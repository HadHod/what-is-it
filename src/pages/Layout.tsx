import { Link, Outlet } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
import { Suspense } from "react";

export default function Layout() {
  return (
    <>
      <nav><Link to={PathConstants.HOME}>HOME</Link> | <Link to={PathConstants.HOME}>log / register</Link></nav>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  )
}
