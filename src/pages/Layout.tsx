import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import NavigationBar from "../components/NavigationBar";

export default function Layout() {
  return (
    <>
      <NavigationBar />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  )
}
