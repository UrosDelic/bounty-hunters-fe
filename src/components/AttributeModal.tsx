import {
  ModalLayout,
  PurpleButton,
  SpinnerLoader,
  SingleAttributeValue,
} from './index';
import AttributeValuesStore from '../stores/attributeValues';
import { useState } from 'react';
import { observer } from 'mobx-react';
import { useFilterByProductAttributeName } from '../custom-hooks/useFilterByProductAttributeName';

interface AttributeModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  productAttributeName: string;
}

function AttributeModal({
  isOpen,
  onClose,
  name,
  productAttributeName,
}: AttributeModalProps) {
  const [isEditClicked, setIsEditClicked] = useState(false);
  const { loading, success, attributeValues } = AttributeValuesStore;
  const filteredData = useFilterByProductAttributeName(
    attributeValues,
    productAttributeName
  );

  console.log(filteredData);

  if (loading) {
    return <SpinnerLoader />;
  }

  return (
    <ModalLayout isOpen={isOpen} onClose={onClose} name={name}>
      {success &&
        filteredData.map(av => {
          const { id, value } = av;
          return <SingleAttributeValue key={id} value={value} />;
        })}
      <PurpleButton>Add New</PurpleButton>
    </ModalLayout>
  );
}

export default observer(AttributeModal);
