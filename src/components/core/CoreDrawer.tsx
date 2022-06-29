import {
    Box,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react';

const TaskDrawer = ({ size, isOpen, onOpen, onClose, children }: any) => {
    return (
        <Box onClick={onOpen} m={4}>
            <Drawer onClose={onClose} isOpen={isOpen} size={size}>
                <DrawerOverlay />
                <DrawerContent bg="gray.700">
                    <DrawerCloseButton />
                    {children}
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default TaskDrawer;
