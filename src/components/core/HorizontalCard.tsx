
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
                mx='auto'
                w={'100%'}
                h={'100%'}
                rounded="md"
                boxShadow="dark-lg"
                color='white'
                overflow='auto'
                alignItems='center'
                ref={elementRef}
                className={elementRef.current}
            >
                {children}
            </Flex>


        </>
    )
}

export default HorizontalCard