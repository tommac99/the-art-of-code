import React, { FC, useEffect, useState } from "react";
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
  move,
} from "react-grid-dnd";
import { GetIcons } from "../../services";
import { Container, GridIcon } from "./styles";

interface Item {
  id: number;
  title: string;
  icon: string;
}

interface Items {
  one: Item[];
  two: Item[];
  three: Item[];
  four: Item[];
}

export const Grid: FC = () => {
  const [items, setItems] = useState<Items | null>(null);

  useEffect(() => {
    async function getData() {
      const data = await GetIcons();
      console.log("data:", data);
      setItems(data);
    }

    getData();
  }, []);

  if (!items) {
    return null;
  }

  const onChange = (
    sourceId: keyof Items,
    sourceIndex: number,
    targetIndex: number,
    targetId: keyof Items | undefined
  ) => {
    console.log("sourceId:", sourceId);
    console.log("sourceIndex:", sourceIndex);
    console.log("targetIndex:", targetIndex);
    console.log("targetId:", targetId);
    const source = sourceId;

    if (targetId) {
      const target = targetId;
      const result = move(
        items[source],
        items[target],
        sourceIndex,
        targetIndex
      );
      return setItems({
        ...items,
        [sourceId]: result[0],
        [targetId]: result[1],
      });
    }
    const result = swap(items[sourceId], sourceIndex, targetIndex);
    return setItems({
      ...items,
      [sourceId]: result,
    });
  };

  // TODO: Fix 5th Item render
  // TODO: Count items.group and if 4 exist then revert to previous layout state

  return (
    <Container>
      <GridContextProvider onChange={onChange as any}>
        <div className="container">
          <GridDropZone
            className="dropzone"
            id="one"
            boxesPerRow={2}
            rowHeight={130}
          >
            {items.one.map((item: Item) => (
              <GridItem key={item.id}>
                <GridIcon index={item.id}>
                  <div className="grid-item-content">{item.title}</div>
                </GridIcon>
              </GridItem>
            ))}
          </GridDropZone>
          <GridDropZone
            className="dropzone"
            id="two"
            boxesPerRow={2}
            rowHeight={130}
          >
            {items.two.map((item: Item) => (
              <GridItem key={item.id}>
                <GridIcon index={item.id}>
                  <div className="grid-item-content">{item.title}</div>
                </GridIcon>
              </GridItem>
            ))}
          </GridDropZone>
          <GridDropZone
            className="dropzone"
            id="three"
            boxesPerRow={2}
            rowHeight={130}
          >
            {items.three.map((item: Item) => (
              <GridItem key={item.id}>
                <GridIcon index={item.id}>
                  <div className="grid-item-content">{item.title}</div>
                </GridIcon>
              </GridItem>
            ))}
          </GridDropZone>
          <GridDropZone
            className="dropzone"
            id="four"
            boxesPerRow={2}
            rowHeight={130}
          >
            {items.four.map((item: Item) => (
              <GridItem key={item.id}>
                <GridIcon index={item.id}>
                  <div className="grid-item-content">{item.title}</div>
                </GridIcon>
              </GridItem>
            ))}
          </GridDropZone>
        </div>
      </GridContextProvider>
    </Container>
  );
};
