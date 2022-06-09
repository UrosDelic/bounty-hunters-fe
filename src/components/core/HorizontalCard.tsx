
import { Flex } from '@chakra-ui/react';


type HorizontalCardProps = {
    children: any,


}
const HorizontalCard = ({ children }: HorizontalCardProps) => {

    return (
        <>
            <Flex
                flexDirection={{ base: 'column', md: 'row' }}
                justifyContent='space-between'
                minH={60}
                w={'90%'}
                m='auto'
                className='test'
                // backgroundImage={'test'}
                // bgPosition="center"
                // bgRepeat='no-repeat'
                my={8}
                rounded="md"
                boxShadow="dark-lg"
                color='white'
                overflow='auto'
                p={4}
                alignItems='center'>
                {children}
            </Flex>


        </>
    )
}

export default HorizontalCard