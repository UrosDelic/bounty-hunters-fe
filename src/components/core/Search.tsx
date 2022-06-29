import {
    Flex,
    Box,
    Input,
    InputGroup,
    InputLeftElement,
    Tag,
    TagLabel,
    TagCloseButton,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useSearchParams } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import { useEffect } from 'react';
import { observer } from 'mobx-react';

const Search = ({ searchTerm, makeSearch, resetSearch }: any) => {
    const [searchParams, setSearchParams] = useSearchParams('');
    const [inputValue, setInputValue] = useState('');
    const [tag, setTag] = useState('');

    useEffect(() => {
        setSearchParams('');
    }, []);

    const handleSearchParams = (e: FormEvent) => {
        e.preventDefault();
        const search = inputValue.trim();
        if (search) {
            searchParams.set(searchTerm, search);
            setTag(search);
            setSearchParams(searchParams);
            makeSearch(search);
        } else {
            searchParams.delete(searchTerm);
            setSearchParams(searchParams);
        }
    };
    const clearSearch = () => {
        setTag('');
        searchParams.delete(searchTerm);
        setSearchParams(searchParams);
        resetSearch();
    };

    return (
        <Flex alignItems="center">
            {tag && (
                <Box mx={2}>
                    <Tag size="xs" p={1} rounded="md" variant="solid" colorScheme="gray">
                        <TagLabel fontSize="xs">{tag}</TagLabel>
                        <TagCloseButton onClick={() => clearSearch()} />
                    </Tag>
                </Box>
            )}
            <form onSubmit={handleSearchParams}>
                <InputGroup>
                    <InputLeftElement zIndex="1" children={<SearchIcon />} />
                    <Input
                        variant="flushed"
                        fontSize="xs"
                        onChange={e => setInputValue(e.target.value)}
                        placeholder="Search"
                    />
                </InputGroup>
            </form>
        </Flex>
    );
};

export default observer(Search);
