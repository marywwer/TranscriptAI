import { useState } from "react";
import Sidebar from "../components/profile/Sidebar";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileForm from "../components/profile/ProfileForm";
import PasswordChangeForm from "../components/profile/PasswordChangeForm";
import styles from "./Profile.module.css";

export default function Profile() {
  const [passwordValid, setPasswordValid] = useState(false);

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <ProfileHeader />
        <div className={styles.card}>
          <ProfileForm />
          <PasswordChangeForm onValidationChange={setPasswordValid} />
        </div>
      </div>
    </div>
  );
}