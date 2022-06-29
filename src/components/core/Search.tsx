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


    useEffect(() => {
        setSearchParams('');
    }, []);

    const handleSearchParams = (e: FormEvent) => {
        e.preventDefault();
        const search = inputValue.trim();
        if (search) {
            searchParams.set(searchTerm, search);

            setSearchParams(searchParams);
            makeSearch(search);
        } else {
            searchParams.delete(searchTerm);
            setSearchParams(searchParams);
        }
    };
    const clearSearch = () => {
        searchParams.delete(searchTerm);
        setSearchParams(searchParams);
        resetSearch();
    };

    return (
        <Flex alignItems="center" mx={2}>

            <form onSubmit={handleSearchParams}>
                <InputGroup>

                    <Input

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
