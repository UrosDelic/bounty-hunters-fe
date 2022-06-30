import { Button } from '@chakra-ui/react';

interface PurpleButtonProps {
  children: React.ReactNode;
  onClick?: (x?: any) => void;
}

function PurpleButton({ children, onClick }: PurpleButtonProps) {
  return (
    <Button
      backgroundColor="purple.500"
      _hover={{ backgroundColor: 'purple.300' }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default PurpleButton;
