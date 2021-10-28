import initTilt from "./tilt";
import initSr from "./sr";
import { addResume } from "./utils";
import { addShooting } from "./utils";
import resume from "../assets/resume.pdf";
import shooting from "../assets/shooting.pdf";

export default function initApp() {
  initSr();
  initTilt();
  // comment this if you don't want to attach your resume
  addResume(resume);
  addShooting(shooting);
}
