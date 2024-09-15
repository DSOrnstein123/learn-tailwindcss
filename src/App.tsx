import { UserCard } from "./ui-1_user-card/UserCard";
import { JobList } from "./ui-2_search/Joblist";
import { Collections } from "./ui-3_collections-list/Collections";

function App() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#E5E7F0] md:h-full lg:h-screen">
      {/* UI 1 */}
      {/* <UserCard /> */}

      {/* UI 2 */}
      {/* <JobList /> */}

      {/* UI 3 */}
      <Collections />
    </div>
  );
}

export default App;
