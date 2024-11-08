import { userStore } from "@/shared/lib/zustand/userStore";

const ProfilePage = () => {
  const { user } = userStore();

  return <h1>{user ? user.username : "User not found"}</h1>;
};

export default ProfilePage;
