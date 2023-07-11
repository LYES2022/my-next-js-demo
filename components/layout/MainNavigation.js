import classes from "./MainNavigation.module.css";
import LinK from "next/link";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <LinK href="/">All Meetups</LinK>
          </li>
          <li>
            <LinK href="/new-meetup">Add New Meetup</LinK>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
