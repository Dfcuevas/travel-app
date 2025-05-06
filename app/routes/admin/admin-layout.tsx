import { Outlet } from "react-router";
import { MobileSidebar, NavItems } from "components";
import { useEffect, useState } from "react";

const AdminLayout = () => {
  const [SidebarComponent, setSidebarComponent] = useState<any>(null);
  useEffect(() => {
    (async () => {
      const mod: any = await import("@syncfusion/ej2-react-navigations");
      setSidebarComponent(() => mod.SidebarComponent);
    })();
  }, []);

  if (!SidebarComponent) return <div>Loading... </div>;

  return (
    <div className="admin-layout">
      <MobileSidebar />
      <aside className="w-full max-w-[270px] hidden lg:block">
        <SidebarComponent width={270} enableGestures={false}>
          <NavItems />
        </SidebarComponent>
      </aside>
      <aside className="children">
        <Outlet />
      </aside>
    </div>
  );
};

export default AdminLayout;
