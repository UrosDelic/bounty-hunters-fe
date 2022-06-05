import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Icon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
ChartJS.register(ArcElement);

type DoughnutChartProps = {
  iconName: any | undefined;
  primaryColor: string;
};

function DoughnutChart({ iconName, primaryColor }: DoughnutChartProps) {
  const data = {
    datasets: [
      {
        data: [70, 30],
        borderColor: ['rgba(255,206,86,0.2)'],
        backgroundColor: [primaryColor, '#B3C5CD'],
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: '80%',
  };

  return (
    <Box width="70px" position="relative">
      <Doughnut data={data} options={options} />
      <Icon
        as={iconName}
        w={6}
        h={6}
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        color={primaryColor}
      />
    </Box>
  );
}

export default DoughnutChart;
