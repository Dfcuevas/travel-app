import { Header } from "components";

const dashboard = () => {
  const user = { name: "Diego" };
  return (
    <main className="dashboard wrapper">
      <Header
        description="Track activity, trends and popular destinations in real time"
        title={`Welcome ${user?.name ?? "Guest"} 👏 `}
      />
      Dashboard Page Contents
    </main>
  );
};

export default dashboard;
