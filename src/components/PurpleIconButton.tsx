import { IconButton } from '@chakra-ui/react';

interface PurpleIconButtonProps {
  icon: React.ReactElement;
  onClick?: (x?: any) => void;
  ariaLabel: string;
}

function PurpleIconButton({ icon, ariaLabel, onClick }: PurpleIconButtonProps) {
  return (
    <IconButton
      aria-label={ariaLabel}
      icon={icon}
      backgroundColor="purple.500"
      _hover={{ backgroundColor: 'purple.300' }}
      onClick={onClick}
    />
  );
}

export default PurpleIconButton;
