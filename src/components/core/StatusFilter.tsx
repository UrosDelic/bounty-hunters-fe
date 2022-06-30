import { useState } from 'react';
import { Box, Select } from '@chakra-ui/react';

import { observer } from 'mobx-react';
import searchFilters from 'stores/searchFilters';

const statuses = [
    { name: 'In Progress', value: 'IN_PROGRESS' },
    { name: 'Rejected', value: 'REJECTED' },
    { name: 'Approve', value: 'APPROVED' },
    { name: 'Pending', value: 'PENDING' },
    { name: 'Ready for review', value: 'READY_FOR_REVIEW' },
];


const StatusFilter = () => {
    const [status, setStatus] = useState('')

    const handleChange = (e: any) => {
        setStatus(e);
        console.log(e)
        if (e) {
            searchFilters.setSearchStatus(e);
        } else {
            searchFilters.setSearchStatus('');

        }
    }

    return (
        <Box mx={2} w={250}>
            <Select size="lg" placeholder="Status" onChange={(e) => handleChange(e.target.value)} value={status}>
                {statuses.map(task => (
                    <option key={task.name} value={task.value} >
                        {task.name}
                    </option>
                ))}
            </Select>
        </Box>
    );
};

export default observer(StatusFilter);
