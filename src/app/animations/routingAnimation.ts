import { animate, query, style, transition, trigger } from '@angular/animations';

const ENTRY_ANIMATION_DURATION = ".3s";
const EXIT_ANIMATION_DURATION = ".3s";

export const fadeAnimation = trigger("fadeAnimation", [
  // The '* => *' will trigger the animation to change between any two states
  transition("* => *", [
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
    query(
      ":leave",
      // here we apply a style and use the animate function to apply the style over 0.3 seconds
      [
        style({ opacity: 1, position: "absolute" }),
        animate(
          EXIT_ANIMATION_DURATION,
          style({ opacity: 0, transform: "translateX(100px)" })
        )
      ],
      { optional: true }
    ),
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
