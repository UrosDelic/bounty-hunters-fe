import { Grid } from '@chakra-ui/react';
import { FeedList, ProfileWidget } from 'components/index';

const NewFeed = () => {
    return (
        <Grid
            px={{ base: 0, md: 8 }}
            gridTemplateColumns={{ base: '1fr', lg: '1.5fr' }}
        >
            <FeedList />
            <ProfileWidget />
        </Grid>
    );
};

export default NewFeed;
