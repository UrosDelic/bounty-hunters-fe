import { useCallback, useState } from 'react';
import {
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
            <FormControl fontSize="xs" px={2}>
                <AutoComplete
                    restoreOnBlurIfEmpty={true}
                    openOnFocus={false}
                    emptyState={'No one is named that'}
                >
                    <InputGroup>
                        <Tooltip
                            hasArrow
                            fontSize="xs"
                            fontWeight="normal"
                            label="Search order: firstname lastname ex(John Smith)"
                            bg="purple.400"
                            color="white"
                            placement="top-start"
                        >
                            <AutoCompleteInput
                                onChange={e => {
                                    debounceOnChange(e);
                                    searchTerm(e);
                                }}
                                value={user}
                                size="md"
                                fontSize="xs"
                                placeholder="Search users"
                            />
                        </Tooltip>
                        {user && (
                            <InputRightElement
                                children={
                                    <Icon
                                        onClick={() => {
                                            resetSearch();
                                        }}
                                        cursor="pointer"
                                        w="10px"
                                        as={CloseIcon}
                                    />
                                }
                            />
                        )}
                    </InputGroup>

                    <AutoCompleteList>
                        {users.map((n, key: any) => (
                            <>
                                <AutoCompleteItem
                                    key={n.id}
                                    value={`${n.firstName} ${n.lastName}`}
                                    p={2}
                                    cursor="pointer"
                                    onClick={() =>
                                        selectUser(n.id, `${n.firstName} ${n.lastName}`)
                                    }
                                >
                                    <Avatar size="sm" mx={1} name={n.firstName} />
                                    <Text mx={1}>{n.firstName}</Text>
                                    <Text mx={1}>{n.lastName}</Text>
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
