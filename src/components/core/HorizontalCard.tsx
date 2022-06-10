
import { Flex } from '@chakra-ui/react';
import { useRef, useEffect } from 'react';
import { backgroundGenerator } from '../../custom-hooks/backgroundGenerator'
type HorizontalCardProps = {
    children: any,
}

const HorizontalCard = ({ children }: HorizontalCardProps) => {
    const background = backgroundGenerator();
    const elementRef = useRef<HTMLDivElement | any>(background);

    useEffect(() => {
        elementRef.current = background;
    }, [])

    return (
        <>

            <Flex
                flexDirection={{ base: 'column', md: 'row' }}
                justifyContent='space-between'
                minH={60}
                mx='auto'
                w={'100%'}
                h={'100%'}
                ref={elementRef}
                className={elementRef.current}
                rounded="md"
                boxShadow="dark-lg"
                color='white'
                overflow='auto'
                alignItems='center'>
                {children}
            </Flex>


        </>
    )
}

export default HorizontalCard