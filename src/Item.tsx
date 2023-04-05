import React, { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { RootState } from "./store";
import { specificRow, updateSpecificRow } from "./todoSlice";

interface ItemProps {
  id: number;
}
const Item = ({ id }: ItemProps) => {
  const dispatch = useAppDispatch();
  const rowData = useAppSelector((state: RootState) => specificRow(state, id));

  const onChange = useCallback(
    (e: any) => {
      if (!rowData) {
        return;
      }
      const updatedRow = { ...rowData, title: e.target.value };
      dispatch(updateSpecificRow({ id, updatedRow }));
    },
    [dispatch, rowData, id]
  );
  if (!rowData) {
    return <div>Loading</div>;
  }
  return (
    <div key={id}>
      <input value={rowData.title} onChange={onChange} />
    </div>
  );
};

export default Item;
