import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

import { fetchCollection } from "./collectionSlice";
import { isEmpty, map } from "lodash-es";

const CollectionView = () => {
  const collection = useAppSelector(state => state.collection);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCollection());
  }, [dispatch]);

  const releases = collection.data.releases;

  return (
    <div>
      <h2>Collection</h2>
      {collection.loading && <div>Loading...</div>}
      {!collection.loading && collection.error ? (
        <div>Error: {collection.error}</div>
      ) : null}
      {!collection.loading && !isEmpty(releases) ? (
        <ul>
          {map(releases, r => (
            <li key={r.id}>{r.basic_information.title}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default CollectionView;
