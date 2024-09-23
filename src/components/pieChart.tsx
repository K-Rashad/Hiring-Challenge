import { Pie, PieChart } from "recharts";
import { Card, CardContent, CardHeader } from "./ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "./ui/chart";

export default function PieChartComp({
  maleCount,
  femaleCount,
}: {
  maleCount: number;
  femaleCount: number;
}) {
  const chartData = [
    { gender: "male", count: maleCount, fill: "lightpink" },
    { gender: "female", count: femaleCount, fill: "lightblue" },
  ];
  const chartConfig = {
    count: {
      label: "Count",
    },
    male: {
      label: "Male",
      color: "lightblue",
    },
    female: {
      label: "Female",
      color: "lightpink",
    },
  } satisfies ChartConfig;
  return (
    <Card className="flex flex-col border-none shadow-none">
      <CardHeader className="items-center pb-0"></CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px] min-h-[300px]"
        >
          <PieChart>
            <Pie data={chartData} dataKey="count" />
            <ChartLegend
              content={<ChartLegendContent nameKey="gender" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
