import { useCallback, useState } from 'react';
import {
    Flex,
    Text,
    InputRightElement,
    Avatar,
    Icon,
    InputGroup,
    FormControl,
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

const UserSearch = ({ setUserById }: any) => {
    const { users } = UsersStore;

    const [user, setSearchedUser] = useState('');

    const searchUsers = (e: any) => {
        const result = e.target.value.trim().split(/\s+/);
        result.length <= 1
            ? UsersStore.searchUsers(result[0], '')
            : UsersStore.searchUsers(result[0], result[1]);
    };

    const debounceOnChange = useCallback(debounce(searchUsers, 1500), []);

    const searchTerm = (e: any) => {
        setSearchedUser(e.target.value);
    };
    const selectUser = (id: any, e: string) => {
        setSearchedUser(e);
        setUserById(id);
    };
    const resetSearch = () => {
        setSearchedUser('');
        setUserById('');
    };
    return (
        <>
            <FormControl fontSize="md" w={250}>
                <AutoComplete
                    restoreOnBlurIfEmpty={true}
                    openOnFocus={false}
                    emptyState={<Text mx={5}>No one is named that</Text>}
                >
                    <InputGroup>
                        <AutoCompleteInput
                            zIndex={0}
                            autoComplete="off"
                            onChange={e => {
                                debounceOnChange(e);
                                searchTerm(e);
                            }}
                            value={user}
                            size="md"
                            fontSize="md"
                            placeholder="Search users ex (John Doe)"
                        />

                        {user && (
                            <InputRightElement
                                zIndex={1}
                                children={
                                    <Icon
                                        onClick={() => {
                                            resetSearch();
                                        }}
                                        cursor="pointer"
                                        w="10px"
                                        mt={1}
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
                                    <Avatar
                                        size="sm"
                                        mx={1}
                                        name={`${n.firstName} ${n.lastName}`}
                                    />
                                    <Flex flexDirection="column">
                                        <Flex>
                                            <Text mr={1}>{n.firstName}</Text>
                                            <Text>{n.lastName}</Text>
                                        </Flex>
                                        <Text as="sub">{n.email}</Text>
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
