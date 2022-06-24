import { Box } from '@chakra-ui/react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import dayjs from 'dayjs';
ChartJS.register(CategoryScale, LinearScale, BarElement);

type BarChartProps = {
  dateObj: any;
};

function BarChart({ dateObj }: BarChartProps) {
  const sortedKeys = Object.keys(dateObj).sort((a, b) => {
    const dateA = new Date(a);
    const dateB = new Date(b);
    return dateA < dateB ? -1 : 1;
  });
  const data = {
    labels: sortedKeys.map(key => dayjs(key).format('DD/MM/YYYY')),
    datasets: [
      {
        data: sortedKeys.map((key: any) => dateObj[key].gained || 0),
        backgroundColor: ['#38A169'],
        borderWidth: 1,
      },
      {
        data: sortedKeys.map((key: any) => dateObj[key].spent || 0),
        backgroundColor: ['#B794F4'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
  };

  return (
    <Box
      maxWidth="700px"
      margin="auto"
      marginBottom="30px"
      display={['none', 'block']}
    >
      <Bar data={data} options={options} />
    </Box>
  );
}

export default BarChart;
