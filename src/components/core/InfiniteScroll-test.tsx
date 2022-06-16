import { Box, Skeleton } from '@chakra-ui/react';
import { observer } from 'mobx-react';
import { useRef } from 'react';

type InfiniteScrollProps = {
    children: any;

    loadMoreData: Function;
};

const InfiniteScroll = ({ children, loadMoreData }: InfiniteScrollProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        let target = ref.current;

        const currentHeight = Math.ceil(target!.scrollTop + target!.offsetHeight);
        if (currentHeight >= target!.scrollHeight) {
            loadMoreData();
        }
    };

    return (
        <>
            <Box
                width={'100%'}
                height={'100%'}
                overflowY="auto"
                ref={ref}
                onScroll={() => handleScroll()}
            >
                {children}
            </Box>
        </>
    );
};

export default observer(InfiniteScroll);
