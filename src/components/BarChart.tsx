import { Box } from '@chakra-ui/react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement);

type BarChartProps = {
  dateObj: any;
};

function BarChart({ dateObj }: BarChartProps) {
  const data = {
    labels: Object.keys(dateObj),
    datasets: [
      {
        data: Object.values(dateObj).map((value: any) => value.gained),
        backgroundColor: ['#38A169'],
        borderWidth: 1,
      },
      {
        data: Object.values(dateObj).map((value: any) => value.spent),
        backgroundColor: ['#B794F4'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
  };

  return (
    <Box maxWidth="500px" margin="auto" marginBottom="30px">
      <Bar data={data} options={options} />
    </Box>
  );
}

export default BarChart;
