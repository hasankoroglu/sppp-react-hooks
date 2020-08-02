import React, { useState, useEffect } from "react";
import { ErrorMessage } from "@components/ErrorMessage";
import { Loading } from "@components/Loading";
import { getWebTitle, getLists } from "./operations";
import { IProps, IState } from "./IExample";

export const Example: React.FC<IProps> = (props: IProps) => {
  const [state, setState] = useState<IState>({ isLoading: true });

  useEffect(() => {
    const getData = async () => {
      const webTitle = await getWebTitle();
      const lists = await getLists();
      setState({
        isLoading: false,
        title: webTitle,
        lists: lists,
      });
    };
    getData();
  }, []);

  const lists = state.lists ? state.lists : [];

  return (
    <>
      {state.isLoading && <Loading />}
      {state.isLoading && state.error && <ErrorMessage message={state.error} />}
      {!state.isLoading && !state.error && (
        <>
          <h1>{state.title}</h1>
          <ul>
            {lists.map((list) => (
              <li key={list.Id}>{list.Title}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
