import { UserCard } from "./ui-1_user-card/UserCard";
import { JobList } from "./ui-2_search/Joblist";
import { Collections } from "./ui-3_collections-list/Collections";
import { ReviewForm } from "./ui-4_review-modal/ReviewForm";

function App() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#E5E7F0]">
      {/* UI 1 */}
      {/* <UserCard /> */}

      {/* UI 2 */}
      {/* <JobList /> */}

      {/* UI 3 */}
      {/* <Collections /> */}

      {/* UI 4 */}
      <ReviewForm />
    </div>
  );
}

export default App;
