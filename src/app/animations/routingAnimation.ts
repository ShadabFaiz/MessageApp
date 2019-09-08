import { animate, query, style, transition, trigger } from '@angular/animations';

const ENTRY_ANIMATION_DURATION = ".3s";
const EXIT_ANIMATION_DURATION = ".3s";

export const fadeAnimation = trigger("fadeAnimation", [
  // The '* => *' will trigger the animation to change between any two states
  transition("* => *", [
    // Animation for component which will enter into view.
    query(
      ":enter",
      [
        style({
          opacity: 0,
          position: "absolute",
          transform: "translateX(-100px)"
        })
      ],
      {
        optional: true
      }
    ),

    // Animation for component which will exit/get destoryed from view.
    query(
      ":leave",
      [
        style({ opacity: 1, position: "absolute" }),
        animate(
          EXIT_ANIMATION_DURATION,
          style({ opacity: 0, transform: "translateX(100px)" })
        )
      ],
      { optional: true }
    ),

    // Animate
    query(
      ":enter",
      [
        style({ opacity: 0 }),
        animate(
          ENTRY_ANIMATION_DURATION,
          style({ opacity: 1, transform: "translateX(0px)" })
        )
      ],
      { optional: true }
    )
  ])
]);
