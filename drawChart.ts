import { ChartJSNodeCanvas } from "chartjs-node-canvas";

const width = 1200;
const height = 400;
const backgroundColour = "white";
const chartJSNodeCanvas = new ChartJSNodeCanvas({
  width,
  height,
  backgroundColour,
});

export const drawChartImage = async () => {
  const configuration: Parameters<typeof chartJSNodeCanvas.renderToBuffer>[0] =
    {
      type: "line",
      data: {
        datasets: [
          {
            data: [20, 10],
          },
        ],
        labels: ["a", "b"],
      },
      options: {},
    };

  return await chartJSNodeCanvas.renderToBuffer(configuration);
  //   writeFile(`./public/${path}`, image, (err) => {
  //     err && console.error("차트를 그리는 중 에러가 발생했습니다.", err);
  //   });
};
