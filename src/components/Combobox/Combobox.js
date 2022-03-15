import React, { useState } from 'react';
import { useCombobox, useMultipleSelection } from 'downshift';
import {
  Wrapper,
  StyledCombobox,
  StyledInputWrapper,
  SelectedItem,
  DropdownToggle,
  StyledOptions,
} from './Combobox.styled';

const items = ['Dawid', 'Wera', 'Feliks', 'Kazimierz', 'Marcel', 'Wawrzyniec'];

const Combobox = () => {
  const [inputValue, setInputValue] = useState('');
  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems,
  } = useMultipleSelection({ initialSelectedItems: [] });
  const getFilteredItems = () =>
    items.filter(
      (item) =>
        selectedItems.indexOf(item) < 0 &&
        item.toLowerCase().startsWith(inputValue.toLowerCase())
    );
  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    inputValue,
    defaultHighlightedIndex: 0,
    selectedItem: null,
    items: getFilteredItems(),
    stateReducer: (state, actionAndChanges) => {
      const { changes, type } = actionAndChanges;
      // eslint-disable-next-line default-case
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          return {
            ...changes,
            isOpen: true,
          };
      }
      return changes;
    },
    onStateChange: ({ inputValue, type, selectedItem }) => {
      switch (type) {
        case useCombobox.stateChangeTypes.InputChange:
          setInputValue(inputValue);
          break;
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          if (selectedItem) {
            setInputValue('');
            addSelectedItem(selectedItem);
          }
          break;
        default:
          break;
      }
    },
  });

  return (
    <Wrapper>
      <StyledCombobox>
        <StyledInputWrapper {...getComboboxProps()}>
          {selectedItems.map((selectedItem, index) => (
            <SelectedItem
              key={`selected-item-${index}`}
              {...getSelectedItemProps({ selectedItem, index })}
            >
              {selectedItem}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeSelectedItem(selectedItem);
                }}
              >
                &#10005;
              </button>
            </SelectedItem>
          ))}
          <input
            {...getInputProps(getDropdownProps({ preventKeyAction: isOpen }))}
          />
          <DropdownToggle
            {...getToggleButtonProps()}
            aria-label={'toggle menu'}
          >
            &#9660;
          </DropdownToggle>
        </StyledInputWrapper>
        <StyledOptions {...getMenuProps()}>
          {isOpen &&
            getFilteredItems(items).map((item, index) => (
              <li
                style={
                  highlightedIndex === index
                    ? { backgroundColor: '#bde4ff' }
                    : {}
                }
                key={`${item}${index}`}
                {...getItemProps({ item, index })}
              >
                {item}
              </li>
            ))}
        </StyledOptions>
      </StyledCombobox>
    </Wrapper>
  );
};

export default Combobox;
