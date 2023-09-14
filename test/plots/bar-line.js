import { Chart } from "@antv/g2";
import { TinyBar } from "../../src/index.js";

export function barLine() {
  const chart = new Chart();

  chart.options({
    type: "view",
    width: 480,
    height: 80,
    children: [
      {
        type: TinyBar,
        data: [
          264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467,
          513, 546, 983, 340, 539, 243, 226, 192,
        ],
      },
      {
        type: "lineY",
        data: [700],
        style: { arrow: true, stroke: "red", lineDash: [2, 2] },
        labels: [
          {
            text: "value = 700",
            position: "right",
            dx: -10,
            textBaseline: "bottom",
          },
        ],
      },
    ],
  });

  chart.render();

  return chart.getContainer();
}
