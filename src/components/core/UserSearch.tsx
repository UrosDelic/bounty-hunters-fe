import { useCallback, useState } from 'react';
import {
    Flex,
    Box,
    Text,
    InputRightElement,
    Avatar,
    Icon,
    InputGroup,
    FormControl,
    Tooltip,
} from '@chakra-ui/react';
import UsersStore from 'stores/users';
import { observer } from 'mobx-react';

import debounce from 'lodash/debounce';
import {
    AutoComplete,
    AutoCompleteInput,
    AutoCompleteItem,
    AutoCompleteList,
} from '@choc-ui/chakra-autocomplete';
import { CloseIcon } from '@chakra-ui/icons';

const UserSearch = (rr: any) => {
    const { users, setSearchTerm } = UsersStore;
    const [user, setUser] = useState('');

    const searchUsers = (e: any) => {
        const result = e.target.value.trim().split(/\s+/);
        result.length <= 1
            ? UsersStore.searchUsers(result[0], '')
            : UsersStore.searchUsers(result[0], result[1]);
    };

    const debounceOnChange = useCallback(debounce(searchUsers, 1000), []);

    const searchTerm = (e: any) => {
        setUser(e.target.value);
    };
    const selectUser = (id: any, e: string) => {
        setUser(e);
        setSearchTerm(id);
    };
    const resetSearch = () => {
        setUser('');
        setSearchTerm('');
    };
    return (
        <>
            <FormControl fontSize="md" >
                <AutoComplete
                    restoreOnBlurIfEmpty={true}
                    openOnFocus={false}
                    emptyState={'No users'}

                >
                    <InputGroup w={250}>
                        <Tooltip
                            hasArrow
                            fontSize="sm"
                            fontWeight="normal"
                            label="Search order: firstname lastname ex(John Smith)"
                            bg="purple.400"
                            color="white"
                            placement="top-start"
                        >
                            <AutoCompleteInput

                                autoComplete='off'
                                onChange={e => {
                                    debounceOnChange(e);
                                    searchTerm(e);
                                }}
                                value={user}
                                size="lg"
                                fontSize="md"
                                placeholder="Search users"
                            />
                        </Tooltip>
                        {user && (
                            <InputRightElement
                                zIndex={0}
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

                    <AutoCompleteList w={250}>
                        {users.map((n, key: any) => (
                            <>
                                <AutoCompleteItem
                                    key={n.id}
                                    value={`${n.firstName} ${n.lastName}`}
                                    p={3}
                                    cursor="pointer"
                                    onClick={() =>
                                        selectUser(n.id, `${n.firstName} ${n.lastName}`)
                                    }
                                >
                                    <Avatar size="sm" mx={1} name={`${n.firstName} ${n.lastName}`} />
                                    <Flex flexDirection='column'>
                                        <Flex>
                                            <Text mr={1}>{n.firstName}</Text>
                                            <Text >{n.lastName}</Text>
                                        </Flex>
                                        <Text as='sub' >{n.email}</Text>
                                    </Flex>
                                </AutoCompleteItem>
                            </>
                        ))}
                    </AutoCompleteList>
                </AutoComplete>
            </FormControl>
        </>
    );
};

export default observer(UserSearch);
