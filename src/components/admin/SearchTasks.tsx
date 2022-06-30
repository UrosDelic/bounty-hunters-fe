import {
    Flex,
    Input,
    InputGroup,
    InputRightElement,
    Icon,
} from '@chakra-ui/react';

import searchFilters from 'stores/searchFilters';
import { useState } from 'react';
import { CloseIcon } from '@chakra-ui/icons';
import { observer } from 'mobx-react';

const SearchTasks = () => {
    const { setSearchTitle } = searchFilters;
    const [title, setTitle] = useState('');


    const searchTerm = (e: any) => {
        setTitle(e.target.value);
    };
    const handleOnChange = (e: any) => {
        const search = e.trim();
        if (search) {
            setTitle(search);
            setSearchTitle(search);
        } else {
            setSearchTitle('');
            setTitle('');
        }
    };
    const resetSearch = () => {
        setSearchTitle('');
        setTitle('');
    };
    return (
        <Flex alignItems="center">
            <InputGroup>
                <Input
                    size="lg"
                    onChange={e => { handleOnChange(e.target.value); searchTerm(e.target.value); }}
                    placeholder="Search task"
                    value={title}
                />
                {title && (
                    <InputRightElement
                        children={
                            <Icon
                                onClick={() => {
                                    resetSearch();
                                }}
                                cursor="pointer"
                                w="10px"
                                mt={2}
                                as={CloseIcon}
                            />
                        }
                    />
                )}
            </InputGroup>
        </Flex>
    );
};

export default observer(SearchTasks);
