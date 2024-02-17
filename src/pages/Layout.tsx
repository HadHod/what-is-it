import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Spinner, NavigationBar } from "../components";

export default function Layout() {
  return (
    <>
      <NavigationBar />
      <main>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  )
}
