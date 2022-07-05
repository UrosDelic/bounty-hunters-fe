import {
    Flex,
    Input,
    InputGroup,
    InputRightElement,
    Icon,
} from '@chakra-ui/react';

import { useCallback, useState } from 'react';
import { CloseIcon } from '@chakra-ui/icons';
import { observer } from 'mobx-react';
import debounce from 'lodash/debounce';
const CoreSearch = ({ setSearchTerm, placeholder }: any) => {
    const [title, setTitle] = useState('');

    const searchTerm = (e: any) => {
        setTitle(e.target.value);
    };
    const handleOnChange = (e: any) => {
        const search = e.trim();
        setSearchTerm(search);
        if (search) {
            setTitle(search);
        } else {
            setSearchTerm('');
            setTitle('');
        }
    };
    const debounceOnChange = useCallback(debounce(handleOnChange, 1500), []);

    const resetSearch = () => {
        setSearchTerm('');
        setTitle('');
    };
    return (
        <Flex >
            <InputGroup>
                <Input
                    size="md"
                    onChange={e => {
                        debounceOnChange(e.target.value);
                        searchTerm(e);
                    }}
                    placeholder={placeholder}
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
                                mt={1}
                                as={CloseIcon}
                            />
                        }
                    />
                )}
            </InputGroup>
        </Flex>
    );
};

export default observer(CoreSearch);
