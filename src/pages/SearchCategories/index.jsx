import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Button } from "@elements/Button";
import { ListMovies } from "@components/ListMovies";
import { Category } from "@components/Categories/Category";
import { useGetData } from "@hooks/useGetData";

import styles from "./styles.module.scss";

export const SearchCategories = () => {
  const navigate = useNavigate();
  const { name, id, date } = useParams();
  let URL = `discover/movie?with_genres=${id}`;
  if (date) {
    URL = "trending/movie/day";
  }
  const { dataMovies, page, setPage } = useGetData({
    url: URL,
    pagination: date ? false : true,
  });

  return (
    <div className={`${styles.searchMovies} category__colorDegradGenre--${id}`}>
      <MdOutlineArrowBackIosNew
        className={styles.arrow}
        onClick={() => navigate("/")}
      />
      <Category title={date ? `Day Trends` : name} id={id} active />

      <ListMovies movies={dataMovies} />

      {date ? null : (
        <div className={styles.showmore} onClick={() => setPage(page + 1)}>
          <Button large>Show more</Button>
        </div>
      )}
    </div>
  );
};