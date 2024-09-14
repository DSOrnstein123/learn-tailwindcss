import { UserCard } from "./ui-1_user-card/UserCard";
import { JobList } from "./ui-2_search/Joblist";

function App() {
  return (
    <h1 className="flex h-screen w-full items-center justify-center bg-[#E6EFFA]">
      {/* UI 1 */}
      {/* <UserCard /> */}

      <JobList />
    </h1>
  );
}

export default App;
