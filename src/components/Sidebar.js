import { useEffect } from "react";
import styles from "./dummy.module.css";

export default function BouncingText() {
   document.querySelectorAll(".bouncing-letters>span").forEach((element) => {
      element.addEventListener("mouseover", (e) => bounce(e.target));
  });
  
  function bounce(letter) {
      if (!letter.classList.contains("bounce")) {
          letter.classList.add("bounce");
          setTimeout(
              function () {
                  letter.classList.remove("bounce");
              },
              1000
          );
      }
  }
  

  return (
    <>
       <h1 class={styles.bounce}>
            <span>H</span><span>e</span><span>y</span><span>!</span>
            <span>I</span><span>'</span><span>m</span> 
            <span>a</span> 
            <span>b</span><span>o</span><span>u</span><span>n</span><span>c</span><span>i</span><span>n</span><span>g</span> 
            <span>t</span><span>e</span><span>x</span><span>t</span>
        </h1>
        <h1 class={styles.bounce}>
            <span>H</span><span>o</span><span>v</span><span>e</span><span>r</span> 
            <span>m</span><span>e</span> 
            <span>a</span><span>n</span><span>d</span> 
            <span>s</span><span>e</span><span>e</span> 
            <span>t</span><span>h</span><span>e</span> 
            <span>m</span><span>a</span><span>g</span><span>i</span><span>c</span>
        </h1>
    </>
  );
}
