import * as React from 'react'
import { useState } from 'react';
import LabelItem from './LabelItem';
import { ReactInputLabelsProps } from './types/ReactInputLabels';
import './InputLabels.module.css'

const CodeItemList = (props: ReactInputLabelsProps) => {
  const { values, onChange, placeholder, 
    className, itemClassName, closeItemCmp, inputClassName } = props;
  const [value, setValue] = useState('')

  const valueChangeHandler = (e: any) => {
    // else update value
    setValue(e.target.value)
  }
  const onKeyDownHandler = (e: any) => {
    // if pressed enter, call onChange, clear value
    if (e.key === 'Enter') {
      e.preventDefault();
      const newVals = [...values, value]
      setValue('')
      onChange(newVals)
    }
  }

  const onRemoveClickHandler = (_val: string) => {
    onChange(values.filter(v => v != _val))
  }

  const getLabels = (): JSX.Element[] => {
    return values.map((lv: string, i: number) => {
      return <LabelItem
        key={`item-${i}`}
        value={lv}
        onRemoveClick={onRemoveClickHandler}
        itemClassName={itemClassName}
        closeItemCmp={closeItemCmp}
      />
    })
  }

  return (
    <React.Fragment>
      <div className={`codes-container ${className}`}>
        {getLabels()}
        <input
          value={value}
          onChange={valueChangeHandler}
          placeholder={placeholder}
          onKeyPress={onKeyDownHandler}
          className={`tag-input ${inputClassName}`} />
      </div>
    </React.Fragment>)
}

export default CodeItemList;