import {
    Flex,
    Input,
    InputGroup,
    InputRightElement,
    Icon,
} from '@chakra-ui/react';

import searchFilters from 'stores/searchFilters';
import { useCallback, useState } from 'react';
import { CloseIcon } from '@chakra-ui/icons';
import { observer } from 'mobx-react';
import debounce from 'lodash/debounce';
const SearchTasks = () => {
    const { setSearchTitle } = searchFilters;
    const [title, setTitle] = useState('');


    const searchTerm = (e: any) => {
        setTitle(e.target.value);
    };
    const handleOnChange = (e: any) => {
        const search = e.trim();
        setSearchTitle(search);
        if (search) {
            setTitle(search);
        } else {
            setSearchTitle('');
            setTitle('');
        }
    };
    const debounceOnChange = useCallback(debounce(handleOnChange, 1500), []);

    const resetSearch = () => {
        setSearchTitle('');
        setTitle('');
    };
    return (
        <Flex alignItems="center">
            <InputGroup>
                <Input
                    size="lg"
                    onChange={e => { debounceOnChange(e.target.value); searchTerm(e); }}
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
