import { Box } from '@chakra-ui/react';
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
        if (currentHeight + 1 >= target!.scrollHeight) {
            loadMoreData();
        }
    };

    return (
        <>
            <Box
                width={'100%'}
                height={'100%'}
                overflow="auto"
                ref={ref}
                onScroll={handleScroll}
                className={'infinite-scrol'}
            >
                {children}
            </Box>
        </>
    );
};

export default observer(InfiniteScroll);
