import {
  ModalLayout,
  PurpleButton,
  SpinnerLoader,
  SingleAttributeValue,
} from './index';
import AttributeValuesStore from '../stores/attributeValues';
import { observer } from 'mobx-react';
import { useFilterByProductAttributeName } from '../custom-hooks/useFilterByProductAttributeName';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

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
  const { success, attributeValues } = AttributeValuesStore;
  const filteredData = useFilterByProductAttributeName(
    attributeValues,
    productAttributeName
  );
  const [isAddNewClicked, setIsAddNewClicked] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <ModalLayout isOpen={isOpen} onClose={onClose} name={name}>
      {success ? (
        filteredData.map(av => {
          const { id, value } = av;
          return <SingleAttributeValue key={id} id={id} value={value} />;
        })
      ) : (
        <SpinnerLoader />
      )}
      {!isAddNewClicked && <PurpleButton>Add New</PurpleButton>}
    </ModalLayout>
  );
}

export default observer(AttributeModal);
